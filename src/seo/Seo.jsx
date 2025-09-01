import { Helmet } from "react-helmet-async";

export default function Seo({ title, description }) {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
        </Helmet>
    );
}
