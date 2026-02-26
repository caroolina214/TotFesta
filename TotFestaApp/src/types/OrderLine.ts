export interface OrderLine {
    id: number;
    orderId: number;
    productId: number;
    pricePerDay: number;   // copia del preu del producte en el moment del pedido
    rentingDays: number;
    numUnits: number;
    total: number;
}