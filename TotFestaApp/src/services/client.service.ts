import { Client } from "@/types/Client";
import { clients } from "@/types/mocks/client.mock";


export const getClients = async (): Promise<Client[]> => {
    return [...clients];
};

export const getClientById = async (id: number): Promise<Client | undefined> => {
    return clients.find(c => c.id === id);
};


export const createClient = async (payload: Client): Promise<Client> => {
    clients.push(payload);
    return payload;
};


export const updateClient = async (payload: Client): Promise<Client | undefined> => {
    const index = clients.findIndex(c => c.id === payload.id);

    if (index === -1) return undefined;

    // Actualitzar el client dins de l’array
    clients[index] = { ...clients[index], ...payload };

    return clients[index];
};


export const deleteClient = async (id: number): Promise<boolean> => {
    const index = clients.findIndex(c => c.id === id);
    let ok = false;

    if (index !== -1) {
        clients.splice(index, 1);
        ok = true;
    }

    return ok;
}