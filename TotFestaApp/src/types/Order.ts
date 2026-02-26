export type OrderStatus =
    | 'PREPARED'
    | 'DELIVERED'
    | 'RETURNED'
    | 'REVISION_PENDING'
    | 'ENDED';

export interface Order {
    id: number;
    code: string;
    clientId: number;
    initDate: string; // ISO (YYYY-MM-DD)
    endDate: string;    // ISO
    status: OrderStatus;
    employeeId: number;   // userId
    notes?: string;
}