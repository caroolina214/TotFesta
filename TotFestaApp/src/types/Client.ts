export interface Client {
    id: number;
    fullName: string;
    nifCif?: string;
    phone?: string;
    email?: string;
    notes?: string;
    active: boolean;
}