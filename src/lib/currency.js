export const formatXof = (n) => {
    if (n === null || n === undefined) return "Sur devis";
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XOF",
        maximumFractionDigits: 0
    }).format(n);
};
