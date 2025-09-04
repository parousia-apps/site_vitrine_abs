// scripts/generate-sitemap.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, join } from "node:path";

const SITE_URL = process.env.SITE_URL || "https://absdistributionsarl.vercel.app";

let products = [];
try { products = JSON.parse(readFileSync(resolve("src/data/products_medical.json"), "utf8")); } catch {}

const staticPaths = ["/", "/medical", "/numerique", "/a-propos", "/contact", "/mentions-legales"];
const productPaths = products.filter(p => p?.slug).map(p => `/medical/produits/${encodeURIComponent(p.slug)}`);

const all = Array.from(new Set([...staticPaths, ...productPaths]));
const lastmod = new Date().toISOString().split("T")[0];

const urls = all.map(p => {
    const loc = `${SITE_URL}${p}`;
    const priority = p === "/" ? "1.0" : (p.startsWith("/medical/produits/") ? "0.8" : "0.6");
    return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${priority}</priority>
</url>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outDir = resolve("public");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sitemap.xml"), xml, "utf8");
console.log(`✅ sitemap.xml généré (${all.length} URL)`);
