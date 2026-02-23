export type RoleName = 'NORMAL' | 'ADMIN';

export interface Role {
    id: number;
    name: RoleName;
    description?: string;
}

export interface User {
    id: number;
    roleId: number;
    name: string;
    email: string;
}