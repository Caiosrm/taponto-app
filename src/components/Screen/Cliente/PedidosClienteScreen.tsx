import { View } from "native-base";
import TopBar from "../../Common/TopBar";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { CantinaContext } from "../../../contexts/CantinaContext";
import { ClienteContext } from "../../../contexts/ClienteContext";
import { RootStackParamList } from "../../../routes/types";
import { HeaderCantina } from "../../Common/Header/HeaderCantina";



const PedidosClienteScreen = () => {
    const user = useContext(ClienteContext);
    const shop = useContext(CantinaContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    /*===================================================================================================*/
    /* handleChange's
    /*===================================================================================================*/




    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/





    return (
        <View>
            <HeaderCantina pageTitle="Meus Pedidos" />


        </View>
    );
}

export default PedidosClienteScreen;