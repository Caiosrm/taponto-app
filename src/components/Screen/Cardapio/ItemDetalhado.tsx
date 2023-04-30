import { ScrollView } from "native-base";
import { ICardapioProps } from "./types"
import AppBar from "../../Common/AppBar";



const ItemDetalhado = (props: ICardapioProps) => {


    return (
        <ScrollView>
            <AppBar pageTitle={props.pageTitle} />


        </ScrollView>
    );
}

export default ItemDetalhado;