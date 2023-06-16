import { View } from "native-base";
import TopBar from "../../Common/TopBar";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useContext } from "react";
import { CantinaContext } from "../../../contexts/CantinaContext";
import { ClienteContext } from "../../../contexts/ClienteContext";
import { RootStackParamList } from "../../../routes/types";



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
            <TopBar />


        </View>
    );
}

export default PedidosClienteScreen;