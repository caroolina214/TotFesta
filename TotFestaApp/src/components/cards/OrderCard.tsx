// components/PedidoCard.tsx
import { View, TouchableOpacity } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Order } from "@/types/Order";
import { GeneralStyles } from "@/styles/General.styles";
import Txt from "../common/Txt";

interface OrderProps {
    order: Order;
}

export default function OrderCard({ order }: OrderProps) {
    const theme = useTheme();
    const isDark = theme.dark;
    var statusLabel = "";

    switch (order.status) {
        case "PREPARED":
            statusLabel = "PREPARAT";
            break;
        case "DELIVERED":
            statusLabel = "ENTREGAT";
            break;
        case "RETURNED":
            statusLabel = "TORNAT";
            break;
        case "REVISION_PENDING":
            statusLabel = "REVISIÓ PENDENT";
            break;
        case "ENDED":
            statusLabel = "FINALITZAT";
            break;
    }

    return (
        <TouchableOpacity
            // onPress={() => router.push(`/orders/${order.id}`)}
            onPress={() => { }}
        >
            <View
                style={[
                    GeneralStyles.card,
                    {
                        backgroundColor: isDark ? theme.colors.onTertiaryContainer : theme.colors.tertiary,
                        borderColor: theme.colors.onSurface,
                    }
                ]}
            >
                <Txt
                    variant="labelLarge"
                    style={[
                        GeneralStyles.cardTitle,
                        { color: isDark ? theme.colors.tertiary : theme.colors.onTertiary, }
                    ]}
                >
                    [{order.code}] - {statusLabel}
                </Txt>
                <Txt style={{ color: isDark ? theme.colors.tertiaryContainer : theme.colors.onTertiaryContainer, }}>
                    Del {order.initDate} al {order.endDate}
                </Txt>
            </View>
        </TouchableOpacity>
    );
}