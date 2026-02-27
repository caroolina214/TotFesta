export type RoleName = 'NORMAL' | 'ADMIN';

export interface Role {
    id: number;
    name: RoleName;
    description?: string;
}

export interface Employee {
    id: string;            // UUID de auth.users
    id_employee: number;
    role_id: number;
    full_name: string;
    email: string;
    created_at?: string;
    roles?: Role;          // si fas select amb join
}