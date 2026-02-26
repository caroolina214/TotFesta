import { orders } from "@/types/mocks/order.mock";

export async function getAllOrders() {
    return Promise.resolve(orders);
}

export async function getOrdersByClient(clientId: number) {
    return Promise.resolve(orders.filter(o => o.clientId === clientId));
}
