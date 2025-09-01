import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-primary-dark text-white">
            <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
                <div>
                    <h4 className="font-semibold">ABS Distribution SARL</h4>
                    <p className="mt-2 text-white/80">Cotonou, Bénin</p>
                    <p className="text-white/80">Tél : +229 XX XX XX XX</p>
                    <p className="text-white/80">Email : contact@exemple.com</p>
                </div>

                <div>
                    <h4 className="font-semibold">Liens</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link className="hover:underline text-white/90 hover:text-white" to="/">Accueil</Link></li>
                        <li><Link className="hover:underline text-white/90 hover:text-white" to="/medical">Produits Médicaux</Link></li>
                        <li><Link className="hover:underline text-white/90 hover:text-white" to="/numerique">Solutions Numériques</Link></li>
                        <li><Link className="hover:underline text-white/90 hover:text-white" to="/a-propos">À propos</Link></li>
                        <li><Link className="hover:underline text-white/90 hover:text-white" to="/contact">Contact / Devis</Link></li>
                        <li><Link className="hover:underline text-white/90 hover:text-white" to="/mentions-legales">Mentions légales & Confidentialité</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold">Suivez-nous</h4>
                    <div className="mt-2 flex gap-3">
                        <a className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="Facebook"><FaFacebookF/></a>
                        <a className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="Instagram"><FaInstagram/></a>
                        <a className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="LinkedIn"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-white/70 pb-6">
                © {new Date().getFullYear()} ABS Distribution SARL – Tous droits réservés.
            </div>
        </footer>
    );
}
