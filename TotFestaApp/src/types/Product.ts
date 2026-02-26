export interface Product {
    id: number;
    prodName: string;
    description?: string;
    pricePerDay: number; // €/ud al dia
    active: boolean;
}