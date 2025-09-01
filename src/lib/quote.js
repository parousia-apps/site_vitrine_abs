const KEY = "quote_items";
export const QUOTE_EVENT = "quote:updated";

function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
}
function write(arr) {
    localStorage.setItem(KEY, JSON.stringify(arr));
    window.dispatchEvent(new CustomEvent(QUOTE_EVENT));
}


export function addToQuote(item) {
    const arr = read();
    const exists = arr.find((x) => x.id === item.id);
    if (!exists) {
        arr.push({
            id: item.id,
            name: item.name,
            kind: item.kind || "product",
            slug: item.slug || null
        });
    }
    write(arr);
    return arr.length;
}
export function removeFromQuote(id) {
    const arr = read().filter((x) => x.id !== id);
    write(arr);
    return arr.length;
}
export function isInQuote(id) {
    return read().some((x) => x.id === id);
}
export function getQuoteItems() { return read(); }
export function clearQuote() { write([]); }
export function getQuoteCount() { return read().length; }
