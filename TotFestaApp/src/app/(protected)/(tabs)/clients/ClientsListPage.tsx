import { View } from "react-native";
import Txt from "../../../../components/Txt";
import { GeneralStyles } from "../../../../styles/General.styles";


export default function ClientsPage() {
    return (
        <View style={GeneralStyles.body}>
            <Txt variant="titleLarge">Llistat de Clients</Txt>
        </View>
    );
}