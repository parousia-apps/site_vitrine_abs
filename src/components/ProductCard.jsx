import { Link, useNavigate } from "react-router-dom";
import { formatXof } from "../lib/currency.js";
import { addToQuote, removeFromQuote, isInQuote } from "../lib/quote.js";
import { useState } from "react";

export default function ProductCard({ p }) {
    const [inQuote, setInQuote] = useState(isInQuote(p.id));
    const navigate = useNavigate();

    function toggleQuote() {
        if (inQuote) removeFromQuote(p.id);
        else addToQuote({ id: p.id, name: p.name, kind: "product", slug: p.slug });
        setInQuote(!inQuote);
    }

    function askQuote() {
        // s’assure que l’article est dans le devis, puis va sur /contact
        if (!inQuote) {
            addToQuote({ id: p.id, name: p.name, kind: "product", slug: p.slug });
            setInQuote(true);
        }
        navigate("/contact");
    }

    return (
        <div className="rounded-2xl border p-4 shadow-sm hover:shadow-md transition bg-white">
            <Link to={`/medical/produits/${p.slug}`} className="block">
                {p.image && (
                    <img loading="lazy" src={p.image} alt={p.name} className="h-40 w-full object-cover rounded-xl mb-3" />
                )}
            </Link>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                    <Link to={`/medical/produits/${p.slug}`} className="hover:underline">{p.name}</Link>
                </h3>
                {p.badge && <span className="text-xs px-2 py-1 rounded-full bg-slate-100">{p.badge}</span>}
            </div>
            <p className="text-sm text-slate-600 mt-1">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold">{formatXof(p.price)}</span>
                <span className={`text-xs ${p.inStock ? "text-green-600" : "text-red-600"}`}>
          {p.inStock ? "En stock" : "Rupture"}
        </span>
            </div>
            <div className="mt-4 flex gap-2">
                <button className="btn-primary" onClick={askQuote}>Demander un devis</button>
                <button className="btn-secondary" onClick={toggleQuote}>
                    {inQuote ? "Retirer du devis" : "Ajouter au devis"}
                </button>
            </div>
        </div>
    );
}
