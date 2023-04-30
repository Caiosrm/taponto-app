import { View } from "native-base";
import AppBar from "../../Common/AppBar";
import { IPedidosProps } from "./types";

const Pedidos = (props: IPedidosProps) => {


    return (
        <View>
            <AppBar pageTitle={props.pageTitle} />


        </View>
    );
}

export default Pedidos;