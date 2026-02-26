import { Product } from "../Product";

export const products: Product[] = [
    {
        id: 1,
        prodName: 'Taula plegable',
        description: 'Taula per a 12 comensals',
        pricePerDay: 10,
        active: true,
    },
    {
        id: 2,
        prodName: 'Cadira plegable',
        pricePerDay: 3,
        active: true,
    },
    {
        id: 3,
        prodName: 'Equip de música',
        description: 'Equip de música complet amb 4 altaveus, taula de control de so i micròfon',
        pricePerDay: 350,
        active: true,
    },
    {
        id: 4,
        prodName: 'Altaveu',
        description: 'Altaveu d\'alimentació per cable. Possibilitat de connexió Bluetooth, USB i entrada auxiliar (Jack 3.5mm)',
        pricePerDay: 150,
        active: true,
    },

];