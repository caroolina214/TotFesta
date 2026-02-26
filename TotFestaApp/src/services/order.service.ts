import { orders } from "@/types/mocks/order.mock";

export function getAllOrders() {
    return orders;
}

export function getOrdersByClient(clientId: number) {
    return orders.filter(o => o.clientId === clientId);
}
