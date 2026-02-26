import { OrderLine } from "../OrderLine";

export const orderLines: OrderLine[] = [
    // Pedido 1 (Carlos) – Taules + cadires
    {
        id: 1,
        orderId: 1,
        productId: 1,  // Taula
        pricePerDay: 10,
        rentingDays: 4,
        numUnits: 3,
        total: 3 * 10 * 4,
    },
    {
        id: 2,
        orderId: 1,
        productId: 2,  // Cadira
        pricePerDay: 3,
        rentingDays: 4,
        numUnits: 12,
        total: 12 * 3 * 4,
    },
    // Pedido 2 (Ana) – Sols cadires
    {
        id: 3,
        orderId: 2,
        productId: 2,
        pricePerDay: 3,
        rentingDays: 2,
        numUnits: 5,
        total: 5 * 2 * 3,
    },
    // Pedido 3 (Grupo Evento SL) – Taules + Cadires + Equip de música
    {
        id: 4,
        orderId: 3,
        productId: 1, //Taula
        pricePerDay: 10,
        rentingDays: 2,
        numUnits: 20,
        total: 20 * 2 * 10,
    },
    {
        id: 5,
        orderId: 3,
        productId: 2, //Cadira
        pricePerDay: 3,
        rentingDays: 2,
        numUnits: 240,
        total: 240 * 2 * 3,
    },
    {
        id: 6,
        orderId: 3,
        productId: 3, //Equip de música
        pricePerDay: 350,
        rentingDays: 2,
        numUnits: 1,
        total: 1 * 2 * 350,
    },
    // Pedido 4 (Carlos) - Altaveus
    {
        id: 7,
        orderId: 4,
        productId: 4,
        pricePerDay: 150,
        rentingDays: 1,
        numUnits: 2,
        total: 2 * 1 * 150,
    },
];