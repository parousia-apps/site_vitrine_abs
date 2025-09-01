import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../data/products_medical.json";
import { formatXof } from "../lib/currency.js";
import Seo from "../seo/Seo.jsx";
import { addToQuote, removeFromQuote, isInQuote } from "../lib/quote.js";
import { useState } from "react";

export default function ProductDetail() {
    const { slug } = useParams();
    const p = products.find((x) => x.slug === slug);
    const [inQuote, setInQuote] = useState(p ? isInQuote(p.id) : false);
    const navigate = useNavigate();

    if (!p) {
        return (
            <section className="container mx-auto px-4 pt-6 pb-10">
                <h1 className="text-2xl font-bold">Produit introuvable</h1>
                <p className="mt-2 text-slate-600">Ce produit n’existe pas ou n’est plus disponible.</p>
                <Link className="btn-secondary mt-4 inline-flex" to="/medical">← Retour au catalogue</Link>
            </section>
        );
    }

    const toggleQuote = () => {
        if (inQuote) removeFromQuote(p.id);
        else addToQuote({ id: p.id, name: p.name, kind: "product", slug: p.slug });
        setInQuote(!inQuote);
    };

    const askQuote = () => {
        if (!inQuote) {
            addToQuote({ id: p.id, name: p.name, kind: "product", slug: p.slug });
            setInQuote(true);
        }
        navigate("/contact");
    };

    return (
        <>
            <Seo title={`${p.name} – Pôle médical`} description={p.description} />
            <section className="container mx-auto px-4 pt-6 pb-10 grid gap-6 md:grid-cols-2">
                <div>
                    {p.image ? (
                        <img src={p.image} alt={p.name} className="rounded-2xl w-full object-cover" />
                    ) : (
                        <div className="rounded-2xl border h-64 grid place-items-center text-slate-400">Aucune image</div>
                    )}
                </div>
                <div>
                    <h1 className="text-3xl font-bold">{p.name}</h1>
                    <p className="mt-2 text-slate-600">{p.description}</p>

                    <div className="mt-4 flex items-center gap-3">
                        <span className="text-2xl font-bold">{formatXof(p.price)}</span>
                        <span className={`text-sm ${p.inStock ? "text-green-600" : "text-red-600"}`}>
              {p.inStock ? "En stock" : "Rupture"}
            </span>
                    </div>

                    {p.category && <p className="mt-1 text-sm text-slate-500">Catégorie : {p.category}</p>}

                    <div className="mt-6 flex gap-2">
                        <button className="btn-primary" onClick={askQuote}>Demander un devis</button>
                        <button className="btn-secondary" onClick={toggleQuote}>
                            {inQuote ? "Retirer du devis" : "Ajouter au devis"}
                        </button>
                        <Link className="btn-secondary" to="/medical">← Retour</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
