import fs from "fs";
import path from "path";
import products from "../src/data/products_medical.json" assert { type: "json" };

// Utilise la variable d'env en prod, sinon fallback sur ton vercel.app
const SITE_URL = process.env.SITE_URL || "https://absdistributionsarl.vercel.app";

// Routes statiques (pas de fragments # dans un sitemap)
const staticPaths = [
    "/", "/medical", "/numerique", "/a-propos", "/contact", "/mentions-legales"
];

// Routes produits
const productPaths = products
    .filter(p => p.slug)
    .map(p => `/medical/produits/${p.slug}`);

const allPaths = [...new Set([...staticPaths, ...productPaths])];

const lastmod = new Date().toISOString();

const urls = allPaths.map(p => `
  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "/" ? "1.0" : p.startsWith("/medical/produits/") ? "0.8" : "0.6"}</priority>
  </url>`).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

const outDir = path.resolve("public");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf8");

console.log(`✅ sitemap.xml généré avec ${allPaths.length} URL(s) vers ${SITE_URL}`);
