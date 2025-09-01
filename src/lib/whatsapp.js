const PHONE = import.meta.env.VITE_WA_PHONE || "611872935";
export function makeWhatsAppLink(text) {
    const base = "https://wa.me/";
    const t = encodeURIComponent(text);
    return `${base}${PHONE}?text=${t}`;
}
