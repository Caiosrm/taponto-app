import { View } from "native-base";
import AppBar from "../../Common/AppBar";
import { IPedidosScreenProps } from "./types";

const PedidosScreen = (props: IPedidosScreenProps) => {


    return (
        <View>
            <AppBar pageTitle={props.pageTitle} />


        </View>
    );
}

export default PedidosScreen;