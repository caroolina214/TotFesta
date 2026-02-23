import { View } from "react-native";
import Txt from "../../../../components/Txt";
import { GeneralStyles } from "../../../../styles/General.styles";
import { useTheme } from "react-native-paper";


export default function ClientsPage() {
    const theme = useTheme();

    return (
        <View style={[GeneralStyles.body, { backgroundColor: theme.colors.background }]}>
            <Txt variant="titleLarge">Llistat de Clients</Txt>
        </View>
    );
}