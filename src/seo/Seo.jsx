import { Helmet } from "react-helmet-async";

const BASE = import.meta.env.VITE_SITE_URL?.replace(/\/+$/,'') || "";

export default function Seo({ title, description }) {
    // essaie de construire une URL canonique stable
    const href =
        typeof window !== "undefined" && BASE
            ? BASE + window.location.pathname + window.location.search
            : undefined;

    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            {href && <link rel="canonical" href={href} />}
        </Helmet>
    );
}
