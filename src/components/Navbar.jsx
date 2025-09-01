import { Link, NavLink, useLocation } from "react-router-dom";
import { MEDICAL_ENABLED } from "../config.js";
import { useEffect, useState } from "react";
import { getQuoteCount, QUOTE_EVENT } from "../lib/quote.js";

const NavItem = ({ to, children }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `px-3 py-2 rounded-xl text-sm transition
       ${isActive ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`
        }
    >
        {children}
    </NavLink>
);

export default function Navbar() {
    const { pathname } = useLocation();
    const [quote, setQuote] = useState(0);

    useEffect(() => {
        setQuote(getQuoteCount());
        const onUpd = () => setQuote(getQuoteCount());
        window.addEventListener(QUOTE_EVENT, onUpd);
        return () => window.removeEventListener(QUOTE_EVENT, onUpd);
    }, [pathname]);

    return (
        <header className="border-b border-white/10 bg-primary-dark text-white sticky top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
                {/* Logo rond */}
                <Link to="/" className="shrink-0" aria-label="Accueil">
                    <div className="p-0.5 rounded-full bg-gradient-to-br from-white/20 to-white/10 inline-block">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-1 ring-white/20 shadow-sm bg-white">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-1 md:gap-2">
                    <NavItem to="/">Accueil</NavItem>
                    {MEDICAL_ENABLED && <NavItem to="/medical">Produits Médicaux</NavItem>}
                    <NavItem to="/numerique">Solutions Numériques</NavItem>
                    <NavItem to="/a-propos">À propos</NavItem>
                    <NavItem to="/contact">
                        Contact / Devis{quote > 0 && <span className="ml-2 chip bg-white text-primary-dark">{quote}</span>}
                    </NavItem>
                </div>
            </nav>
        </header>
    );
}
