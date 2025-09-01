import Seo from "../seo/Seo.jsx";
import {Link} from "react-router-dom";
import products from "../data/products_medical.json";
import {formatXof} from "../lib/currency.js";
import {
    FaStethoscope,
    FaLaptopCode,
    FaMobileAlt,
    FaDatabase,
    FaShieldAlt,
    FaShippingFast,
    FaHeadset,
    FaLightbulb
} from "react-icons/fa";
import testimonials from "../data/temoignages.json";

export default function Home() {
    const featured = products.slice(0, 6);

    return (
        <>
            <Seo
                title="Accueil – Médical & Numérique"
                description="Des fondations solides, des solutions vivantes — à l’écoute de vos pensées pour rendre visible l’invisible."
            />
            {/* HERO */}
            <section className="pt-16 relative">
                <div className="relative h-[56vh] md:h-[70vh]">
                    <img src="/images/hero-medical.jpg" alt=""
                         className="absolute inset-0 w-1/2 h-full object-cover hidden md:block"/>
                    <img src="/images/hero-digital.jpg" alt=""
                         className="absolute right-0 inset-y-0 w-full md:w-1/2 h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
                    <div className="relative container mx-auto px-4 h-full grid content-center">
                        <div className="relative container mx-auto px-4 h-full grid content-center">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
                                Des fondations solides, des solutions vivantes —
                            </h1>

                            <h2 className="text-xl md:text-2xl font-semibold text-white/90 leading-snug mt-3 max-w-3xl">
                                à l’écoute de vos pensées pour rendre visible l’invisible.
                            </h2>

                            <h3 className="text-base md:text-lg font-medium text-white/80 leading-relaxed mt-4 max-w-2xl">
                                Produits stériles & équipements + sites web, apps, et outils de gestion.
                            </h3>

                            <div className="mt-6 flex gap-3">
                                <Link className="btn-primary-black" to="/medical">Découvrir nos produits</Link>
                                <Link className="btn-secondary-black" to="/contact">Demander un devis</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION PRODUITS MÉDICAUX */}
            <section className="container mx-auto px-4 py-14">
                <header className="flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Produits Médicaux</h2>
                        <p className="text-slate-600">Équipements hospitaliers, diagnostic, consommables…</p>
                    </div>
                    <Link className="btn-secondary" to="/medical">Voir tout</Link>
                </header>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((p) => (
                        <div key={p.id} className="rounded-2xl border p-4 bg-white">
                            {p.image && <img loading="lazy" src={p.image} alt={p.name}
                                             className="h-40 w-full object-cover rounded-xl mb-3"/>}
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-sm text-slate-600">{p.category}</p>
                            <div className="mt-2 font-bold">{formatXof(p.price)}</div>
                            <Link to={`/medical/produits/${p.slug}`}
                                  className="btn-primary mt-3 inline-flex">Voir</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION SOLUTIONS NUMÉRIQUES */}
            <section className="bg-white/70 border-y">
                <div className="container mx-auto px-4 py-14">
                    <h2 className="text-2xl font-bold">Solutions Numériques</h2>
                    <p className="text-slate-600">Sites web, apps mobiles, gestion</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <FaLaptopCode/>,
                                title: "Création de sites web",
                                desc: "Sites vitrines et boutiques en ligne pour tout type de secteur et d'activité"
                            },
                            {
                                icon: <FaMobileAlt/>,
                                title: "Applications mobiles",
                                desc: "Application qui répond à un besoin précis."
                            },
                            {
                                icon: <FaDatabase/>,
                                title: "Solutions de gestion",
                                desc: "Solution informatique sur mesure pour gérer votre activité"
                            },
                        ].map((b) => (
                            <div key={b.title} className="rounded-2xl border p-5 bg-white">
                                <div className="text-3xl text-accent">{b.icon}</div>
                                <h3 className="mt-3 font-semibold">{b.title}</h3>
                                <p className="text-sm text-slate-600 mt-1">{b.desc}</p>
                                <Link to="/numerique" className="text-accent text-sm mt-3 inline-flex hover:underline">En
                                    savoir plus →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION POURQUOI NOUS CHOISIR */}
            <section className="container mx-auto px-4 py-14">
                <h2 className="text-2xl font-bold">Pourquoi nous choisir</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {icon: <FaShieldAlt/>, t: "Qualité certifiée", d: "Matériel conforme aux standards."},
                        {icon: <FaShippingFast/>, t: "Livraison rapide", d: "Disponibilités locales & import."},
                        {icon: <FaHeadset/>, t: "Support technique", d: "Assistance et maintenance."},
                        {icon: <FaLightbulb/>, t: "Innovation", d: "Solutions numériques sur mesure."}
                    ].map((f) => (
                        <div key={f.t} className="rounded-2xl border p-5 bg-white">
                            <div className="text-2xl text-black">{f.icon}</div>
                            <h3 className="mt-2 font-semibold">{f.t}</h3>
                            <p className="text-sm text-slate-600">{f.d}</p>
                        </div>
                    ))}
                </div>

                {/* Témoignages */}
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {testimonials.map((t, i) => (
                        <div key={i} className="rounded-2xl border p-5 bg-white">
                            <p className="italic">“{t.text}”</p>
                            <p className="mt-2 text-sm text-slate-600">— {t.name}, {t.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
