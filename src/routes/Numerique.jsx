import services from "../data/services_numerique.json";
import ServiceCard from "../components/ServiceCard.jsx";
import Seo from "../seo/Seo.jsx";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Numerique() {
    const blocks = [
        { icon: <FaLaptopCode/>, title: "Création de sites web", desc: "Sites vitrines et boutiques en ligne pour tout type de secteur et d'activité" },
        { icon: <FaMobileAlt/>, title: "Applications mobiles", desc: "Application qui répond à un besoin précis." },
        { icon: <FaDatabase/>, title: "Solutions de gestion", desc: "Solution informatique sur mesure pour gérer votre activité" },
    ];

    return (
        <>
            <Seo title="Solutions Numériques – Offres & tarifs" description="Sites web, apps mobiles, outils de gestion, intégrations." />
            <section className="container mx-auto px-4 pt-20 pb-10">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold">Solutions Numériques</h1>
                    <p className="text-slate-600">Offres proposées & prix indicatifs.</p>
                </header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {blocks.map((b) => (
                        <div key={b.title} className="rounded-2xl border p-5 bg-white">
                            <div className="text-3xl text-accent">{b.icon}</div>
                            <h3 className="mt-3 font-semibold">{b.title}</h3>
                            <p className="text-sm text-slate-600 mt-1">{b.desc}</p>
                            <Link to="/contact" className="text-accent text-sm mt-3 inline-flex hover:underline">En savoir plus →</Link>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold mt-10">Nos offres & tarifs</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => <ServiceCard key={s.id} s={s} />)}
                </div>
            </section>
        </>
    );
}
