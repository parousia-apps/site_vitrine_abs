import Seo from "../seo/Seo.jsx";
import { useEffect, useMemo, useState } from "react";
import products from "../data/products_medical.json";
import services from "../data/services_numerique.json";
import { getQuoteItems, removeFromQuote, clearQuote, QUOTE_EVENT } from "../lib/quote.js";
import { Link } from "react-router-dom";
import {makeWhatsAppLink} from "../lib/whatsapp.js";

function buildQuoteMessage(items) {
    if (!items.length) return "Bonjour, j’aimerais un devis.";
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const lines = items.map((it) => {
        if (it.kind === "service") {
            const s = services.find((x) => x.id === it.id);
            const url = s ? `${origin}/numerique#${s.id}` : `${origin}/numerique`;
            return `- [OFFRE] ${it.id} – ${it.name} (x1) ${url}`;
        } else {
            const p = products.find((x) => x.id === it.id);
            const url = p?.slug ? `${origin}/medical/produits/${p.slug}` : `${origin}/medical`;
            return `- [PRODUIT] ${it.id} – ${it.name} (x1) ${url}`;
        }
    });
    return `Bonjour, j’aimerais un devis pour :\n${lines.join("\n")}\nMerci.`;
}

export default function Contact() {
    const [items, setItems] = useState(getQuoteItems());
    const [touched, setTouched] = useState(false);
    const autoMsg = useMemo(() => buildQuoteMessage(items), [items]);
    const [msg, setMsg] = useState(autoMsg);

    useEffect(() => { if (!touched) setMsg(autoMsg); }, [autoMsg, touched]);

    useEffect(() => {
        const onUpd = () => setItems(getQuoteItems());
        window.addEventListener(QUOTE_EVENT, onUpd);
        return () => window.removeEventListener(QUOTE_EVENT, onUpd);
    }, []);

    const handleRemove = (id) => { removeFromQuote(id); setItems(getQuoteItems()); };
    const handleClear = () => { clearQuote(); setItems([]); };

    return (
        <>
            <Seo title="Contact / Devis" description="Demandez un devis : vos articles/offres sont inclus automatiquement." />
            <section className="container mx-auto px-4 pt-6 pb-10 max-w-2xl">
                <h1 className="text-2xl font-bold">Contact / Devis</h1>
                <p className="text-slate-600 mt-2">Message prérempli si des produits ou offres ont été ajoutés.</p>

                {/* Récap sélection avec retrait */}
                {items.length > 0 ? (
                    <div className="mt-4 border rounded-xl p-3 bg-white">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold">Sélection</h2>
                            <button className="text-sm text-primary hover:underline" onClick={handleClear}>Vider la sélection</button>
                        </div>
                        <ul className="mt-2 space-y-2">
                            {items.map((it) => {
                                const p = products.find((x) => x.id === it.id);
                                const s = services.find((x) => x.id === it.id);
                                const to =
                                    it.kind === "service"
                                        ? (s ? `/numerique#${s.id}` : "/numerique")
                                        : (p?.slug ? `/medical/produits/${p.slug}` : "/medical");
                                return (
                                    <li key={it.id} className="flex items-center justify-between gap-3">
                                        <div className="text-sm">
                                            <span className="font-medium">{it.name}</span>{" "}
                                            <span className="text-slate-500">({it.id})</span>{" "}
                                            <Link className="text-primary hover:underline" to={to}>Voir</Link>
                                            <span className="text-slate-500"> — x1</span>
                                        </div>
                                        <button className="chip hover:bg-slate-200" onClick={() => handleRemove(it.id)}>Retirer ✕</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <p className="mt-4 text-sm text-slate-600">Aucun article/offre dans le devis pour l’instant.</p>
                )}

                {/* Message (modifiable) */}
                <textarea
                    className="mt-4 w-full rounded-xl border px-3 py-2 min-h-[160px] bg-white"
                    placeholder="Votre message…"
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value); setTouched(true); }}
                />

                {/* Ici tu peux mettre un form “envoyer” interne, ou laisser mail/WhatsApp ensuite */}
                <div className="mt-4 flex gap-2">
                    <a className="btn-primary" href={`mailto:rodicaadigbonon@yahoo.com?subject=Demande%20de%20devis&body=${encodeURIComponent(msg)}`}>Envoyer par e-mail</a>
                    <a className="btn-green" href={makeWhatsAppLink(msg)} target="_blank" rel="noreferrer">Contacter par WhatsApp</a>
                </div>

                <div className="mt-8 text-sm text-slate-600">
                    <p><strong>Téléphone :</strong> +229 XX XX XX XX</p>
                    <p><strong>Adresse :</strong> Cotonou, Bénin</p>
                </div>
            </section>
        </>
    );
}
