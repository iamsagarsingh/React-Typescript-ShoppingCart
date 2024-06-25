export function formatCurrency(amount:number){
    const locale = 'en-US'
    const currency = 'INR'
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}