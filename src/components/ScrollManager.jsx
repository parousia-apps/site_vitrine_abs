import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    // 1) À chaque changement de page → remonter en haut
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    // 2) Si on a une ancre (#id), scroller jusqu'à l'élément en tenant compte de la navbar
    useEffect(() => {
        if (!hash) return;
        const id = hash.slice(1);
        // petit timeout pour laisser le DOM se peindre
        const t = setTimeout(() => {
            const el = document.getElementById(id);
            if (!el) return;

            const header = document.querySelector("header");
            const headerH = header ? header.getBoundingClientRect().height : 0;

            const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8; // 8px de marge
            window.scrollTo({ top: y, behavior: "smooth" });
        }, 0);

        return () => clearTimeout(t);
    }, [hash, pathname]);

    return null;
}
