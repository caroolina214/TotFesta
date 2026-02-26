import { Client } from "@/types/Client";
import { clients } from "@/types/mocks/client.mock";
import { orders } from "@/types/mocks/order.mock";

// Validacions

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{9}$/; // tlf d'espanya
const nifRegex = /^[0-9]{8}[A-Za-z]$/;
const cifRegex = /^[ABCDEFGHJKLMNPQRSUVW][0-9]{7}[0-9A-J]$/;

function validateEmail(email?: string) {
    if (!email) return true;
    return emailRegex.test(email);
}

function validatePhone(phone?: string) {
    if (!phone) return true;
    return phoneRegex.test(phone);
}

function validateNifCif(nifCif?: string) {
    if (!nifCif) return true;
    return nifRegex.test(nifCif) || cifRegex.test(nifCif);
}

function isDuplicateNifCif(nifCif: string, id?: number) {
    return clients.some(c => c.nifCif === nifCif && c.id !== id);
}

function normalizeNifCif(value?: string) {
    if (!value) return value;
    return value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}

function normalizePhone(phone?: string) {
    if (!phone) return phone;
    return phone.replace(/\D/g, ""); // només dígits
}

function normalizeEmail(email?: string) {
    if (!email) return email;
    return email.trim().toLowerCase().replace(/\s+/g, "");
}


//Per a crear o editar el client

function validateClient(payload: Client, isEdit = false) {
    // Normalitzar
    payload.nifCif = normalizeNifCif(payload.nifCif);
    payload.phone = normalizePhone(payload.phone);
    payload.email = normalizeEmail(payload.email);

    // Almenys email o telèfon
    if (!payload.email && !payload.phone) {
        throw { code: "MISSING_CONTACT", message: "Has d'introduir email o telèfon." };
    }

    if (payload.email && !validateEmail(payload.email)) {
        throw { code: "INVALID_EMAIL", message: "El format del email no és correcte." };
    }

    if (payload.phone && !validatePhone(payload.phone)) {
        throw { code: "INVALID_PHONE", message: "El telèfon ha de tindre 9 dígits." };
    }

    if (payload.nifCif && !validateNifCif(payload.nifCif)) {
        throw { code: "INVALID_NIFCIF", message: "El NIF/CIF no és vàlid." };
    }

    if (payload.nifCif && isDuplicateNifCif(payload.nifCif, payload.id)) {
        throw { code: "DUPLICATE_NIFCIF", message: "Ja existeix un client amb aquest NIF/CIF." };
    }

}


// CRUD 

export const getClients = async (): Promise<Client[]> => {
    return [...clients];
};

export const getClientById = async (id: number): Promise<Client | undefined> => {
    return clients.find(c => c.id === id);
};


export const createClient = async (payload: Client): Promise<Client> => {
    validateClient(payload, false);
    clients.push(payload);
    return payload;
};


export const updateClient = async (payload: Client): Promise<Client | undefined> => {
    validateClient(payload, true);

    const index = clients.findIndex(c => c.id === payload.id);

    if (index === -1) return undefined;

    // Actualitzar el client dins de l’array
    clients[index] = { ...clients[index], ...payload };

    return clients[index];
};


export const deleteClient = async (id: number): Promise<boolean> => {
    const hasOrders = orders.some(o => o.clientId === id);
    if (hasOrders) {
        throw {
            code: "CLIENT_HAS_ORDERS",
            message: "No es pot eliminar un client amb pedidos associats."
        };
    }

    const index = clients.findIndex(c => c.id === id);
    let ok = false;

    if (index !== -1) {
        clients.splice(index, 1);
        ok = true;
    }

    return ok;
}