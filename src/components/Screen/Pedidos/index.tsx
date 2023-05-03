import { View } from "native-base";
import AppBar from "../../Common/AppBar";
import { IPedidoProps } from "./types";

const Pedidos = (props: IPedidoProps) => {


    return (
        <View>
            <AppBar pageTitle={props.pageTitle} />


        </View>
    );
}

export default Pedidos;