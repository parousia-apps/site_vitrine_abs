import { useNavigate } from "react-router-dom";
import { formatXof } from "../lib/currency.js";
import { addToQuote, removeFromQuote, isInQuote } from "../lib/quote.js";
import { useState } from "react";

export default function ServiceCard({ s }) {
    const navigate = useNavigate();
    const [inQuote, setInQuote] = useState(isInQuote(s.id));

    function toggleQuote() {
        if (inQuote) removeFromQuote(s.id);
        else addToQuote({ id: s.id, name: s.title, kind: "service", slug: s.id });
        setInQuote(!inQuote);
    }

    function askQuote() {
        if (!inQuote) {
            addToQuote({ id: s.id, name: s.title, kind: "service", slug: s.id });
            setInQuote(true);
        }
        navigate("/contact");
    }

    return (
        <div id={s.id} className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{s.summary}</p>
            <p className="mt-3 text-xl font-bold">À partir de {formatXof(s.fromPrice)}</p>
            {s.deliverables?.length > 0 && (
                <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                    {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
            )}
            <div className="mt-4 flex gap-2">
                <button className="btn-primary-green" onClick={askQuote}>Demander un devis</button>
                <button className="btn-secondary-green" onClick={toggleQuote}>
                    {inQuote ? "Retirer du devis" : "Ajouter au devis"}
                </button>
            </div>
        </div>
    );
}
