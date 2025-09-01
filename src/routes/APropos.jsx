// src/routes/APropos.jsx
import Seo from "../seo/Seo.jsx";
import { Link } from "react-router-dom";

export default function APropos() {
    return (
        <>
            <Seo
                title="À propos "
                description="Entreprise fondée par Barthélémy Adigbonon : informatique-bureautique, solutions digitales, marchés ministériels (immatriculation), puis matériel médical. Le pôle numérique est aujourd'hui renforcé par sa fille."
            />

            <section className="container mx-auto px-4 pt-6 pb-10">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold">À propos</h1>
                </header>

                {/* Notre histoire */}
                <section className="rounded-2xl border bg-white p-6 mb-8">
                    <h2 className="text-xl font-semibold">Notre histoire</h2>
                    <p className="mt-3">
                        Créée par <strong>Barthélémy ADIGBONON</strong> en <strong>[année de création]</strong>, l’entreprise a
                        démarré comme <strong>revendeur de matériel informatique et de bureautique</strong>.
                    </p>
                    <p className="mt-3">
                        Au fil des années, nous avons élargi notre champ d’action en{" "}
                        <strong>ajoutant des solutions digitales</strong> (sites web, intégrations logicielles, outils métiers).
                        Cette expertise nous a permis de travailler sur plusieurs marchés publics, notamment avec des
                        ministères. Parmi les projets marquants&nbsp;: la <strong>conception et la mise en place d’une application
                        d’immatriculation des véhicules</strong> pour le <strong>Ministère des Transports</strong> (analyse des
                        besoins, développement, déploiement et accompagnement).
                    </p>
                    <p className="mt-3">
                        Face aux besoins du terrain, nous avons ensuite <strong>diversifié nos activités vers la vente de matériel
                        médical</strong> (équipements, diagnostic, consommables), en gardant la même exigence de qualité et de
                        service.
                    </p>
                    <p className="mt-3">
                        En <strong>2025</strong>, face aux enjeux technologiques et l'avancée rapide du secteur nous avons choisi
                        de <strong>renforcer le pôle Solutions Numériques</strong>{" "}
                        et <strong>diversifier l’offre</strong> (applications métier, e-commerce, intégrations d’API, maintenance &
                        sécurité, formations).
                    </p>

                    <br/><br/>

                    {/* Notre vision */}
                    <section className="rounded-2xl border bg-white p-6 mb-8">
                        <h2 className="text-xl font-semibold">Notre vision</h2>

                        {/* Slogan */}
                        <blockquote
                            className="mt-3 border-l-4 border-primary pl-4 text-lg font-semibold text-slate-900">
                            « Des fondations solides, des solutions vivantes. »
                        </blockquote>

                        {/* Explication */}
                        <p className="mt-4 text-slate-700">
                            Pour nous, <strong>le visible naît de l’invisible</strong> : un projet commence par une
                            pensée, une image
                            intérieure, une conviction. Notre premier travail est <strong>d’écouter votre
                            imagination</strong>, ce que
                            vous avez <strong>dans le cœur</strong>, et de le traduire fidèlement en solutions concrètes
                            qui servent
                            vraiment. Nous bâtissons sur des <strong>fondations solides</strong> (qualité, sécurité,
                            parole tenue), afin
                            que les solutions restent <strong>vivantes</strong> : utiles aujourd’hui, évolutives demain.
                        </p>

                        {/* Principes (clin d’œil discret) */}
                        <ul className="mt-4 grid gap-3 md:grid-cols-2">
                            <li className="rounded-xl border p-4">
                                <span className="font-medium">Écoute & discernement</span>
                                <p className="text-sm text-slate-600">Ateliers d’idéation, reformulation, croquis
                                    rapides pour capter l’intention juste.</p>
                            </li>
                            <li className="rounded-xl border p-4">
                                <span className="font-medium">Pierre angulaire</span>
                                <p className="text-sm text-slate-600">Un cahier des charges clair (objectifs, impacts,
                                    critères de qualité) pose l’axe du projet.</p>
                            </li>
                            <li className="rounded-xl border p-4">
                                <span className="font-medium">Lumière & transparence</span>
                                <p className="text-sm text-slate-600">Budgets et délais explicites, décisions tracées,
                                    communication simple.</p>
                            </li>
                            <li className="rounded-xl border p-4">
                                <span className="font-medium">Semer & faire grandir</span>
                                <p className="text-sm text-slate-600">Itérations courtes, retours terrain, amélioration
                                    continue — des solutions qui mûrissent.</p>
                            </li>
                        </ul>

                        <p className="mt-4 text-slate-700">
                            <strong>Servir d’abord</strong> : quand l’intention est juste, la technologie devient un bon
                            outil entre des mains
                            humaines — une œuvre qui <strong>porte du fruit</strong>.
                        </p>
                    </section>
                </section>

                {/* Ce que nous faisons aujourd’hui */}
                <section className="rounded-2xl border bg-white p-6 mb-8">
                    <h2 className="text-xl font-semibold">Ce que nous faisons aujourd’hui</h2>
                    <p className="mt-3">
                        <strong>Deux pôles complémentaires, une même exigence de qualité :</strong>
                    </p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border p-4">
                            <h3 className="font-semibold">Produits Médicaux</h3>
                            <p className="text-slate-600 mt-1">
                                Équipements hospitaliers, <strong>matériel de diagnostic</strong>, <strong>consommables</strong>,
                                conseil à l’achat et <strong>support technique</strong>.
                            </p>
                            <Link to="/medical" className="text-primary mt-2 inline-flex hover:underline">
                                Découvrir le catalogue →
                            </Link>
                        </div>
                        <div className="rounded-xl border p-4">
                            <h3 className="font-semibold">Solutions Numériques</h3>
                            <p className="text-slate-600 mt-1">
                                Sites web, applications mobiles, gestion, automatisation...
                            </p>
                            <Link to="/numerique" className="text-primary mt-2 inline-flex hover:underline">
                                Voir nos offres →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Chiffres clés (à personnaliser) */}
                <section className="rounded-2xl border bg-white p-6 mb-8">
                    <h2 className="text-xl font-semibold">Quelques chiffres</h2>
                    <ul className="mt-3 grid gap-3 md:grid-cols-3">
                        <li className="rounded-xl border p-4 text-center">
                            <span className="block text-2xl font-bold">[X]+</span>
                            <span className="text-slate-600 text-sm">clients accompagnés</span>
                        </li>
                        <li className="rounded-xl border p-4 text-center">
                            <span className="block text-2xl font-bold">[Y]+</span>
                            <span className="text-slate-600 text-sm">projets numériques livrés</span>
                        </li>
                        <li className="rounded-xl border p-4 text-center">
                            <span className="block text-2xl font-bold">[Z]</span>
                            <span className="text-slate-600 text-sm">ans d’expérience cumulée</span>
                        </li>
                    </ul>
                </section>

            </section>
        </>
    );
}
