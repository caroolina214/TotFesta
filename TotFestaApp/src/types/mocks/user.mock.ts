import { Role, User } from '@/types/User';


// -----------------------------------------------------
// ROLES
// -----------------------------------------------------

export const roles: Role[] = [
    { id: 1, name: 'NORMAL', description: 'Standard user' },
    { id: 2, name: 'ADMIN', description: 'System administrator' },
];

// -----------------------------------------------------
// USERS
// -----------------------------------------------------

export const users: User[] = [
    {
        id: 1,
        roleId: 2,
        name: 'Admin',
        email: 'admin@gmail.com',
    },
    {
        id: 2,
        roleId: 1,
        name: 'User 1',
        email: 'user1@gmail.com',
    },
];

export const mockPasswords: Record<number, string> = {
    1: 'admin',
    2: '1234',
};