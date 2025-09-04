import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE = import.meta.env.VITE_SITE_URL || "https://absdistributionsarl.vercel.app";

export default function Seo({ title, description }) {
    const { pathname } = useLocation();
    const canonical = `${BASE}${pathname || "/"}`;
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
}
