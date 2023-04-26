import { ScrollView } from "native-base";
import { ICardapioScreenProps } from "./types"
import AppBar from "../../Common/AppBar";



const ItemDetalhado = (props: ICardapioScreenProps) => {


    return (
        <ScrollView>
            <AppBar pageTitle={props.pageTitle} />


        </ScrollView>
    );
}

export default ItemDetalhado;