import { useMemo, useState } from "react";
import products from "../data/products_medical.json";
import ProductCard from "../components/ProductCard.jsx";
import Seo from "../seo/Seo.jsx";

export default function Medical() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("Toutes");

    const categories = useMemo(() => {
        const set = new Set(products.map((p) => p.category).filter(Boolean));
        return ["Toutes", ...Array.from(set)];
    }, []);

    const filtered = products.filter((p) => {
        const matchQ = [p.name, p.description, p.category].join(" ").toLowerCase().includes(q.toLowerCase());
        const matchC = cat === "Toutes" ? true : p.category === cat;
        return matchQ && matchC;
    });

    return (
        <>
            <Seo title="Produits Médicaux – Articles & prix" description="Catalogue médical : disponibilités, catégories et tarifs." />
            <section className="container mx-auto px-4 pt-20 pb-10">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold">Produits Médicaux</h1>
                    <p className="text-slate-600">Équipements hospitaliers, diagnostic, consommables…</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {categories.map((c) => (
                            <button
                                key={c}
                                onClick={() => setCat(c)}
                                className={`chip ${cat === c ? "bg-primary text-white" : ""}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <input
                        placeholder="Recherche (nom, catégorie)…"
                        className="mt-4 w-full md:w-96 rounded-xl border px-3 py-2"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
                </div>
                {filtered.length === 0 && (
                    <p className="mt-6 text-sm text-slate-500">Aucun article ne correspond à votre recherche.</p>
                )}
            </section>
        </>
    );
}
