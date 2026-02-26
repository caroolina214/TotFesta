import { Order } from "../Order";

export const orders: Order[] = [
    {
        id: 1,
        code: 'P-001',
        clientId: 1,
        initDate: '2025-12-10',
        endDate: '2025-12-14',
        status: 'PREPARED',
        employeeId: 2,
        notes: 'Entrega pel matí',
    },
    {
        id: 2,
        code: 'P-002',
        clientId: 2,
        initDate: '2025-12-08',
        endDate: '2025-12-11',
        status: 'DELIVERED',
        employeeId: 2,
    },
    {
        id: 3,
        code: 'P-003',
        clientId: 3,
        initDate: '2025-12-05',
        endDate: '2025-12-09',
        status: 'REVISION_PENDING',
        employeeId: 1,
        notes: 'Revisar possibles desperfectes',
    },
    {
        id: 4,
        code: 'P-004',
        clientId: 1,
        initDate: '2025-12-01',
        endDate: '2025-12-03',
        status: 'ENDED',
        employeeId: 2,
    },
];