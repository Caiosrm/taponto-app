import React, {  } from "react";
import { View, HStack } from "native-base";
import { ISacolaScreenProps } from "./types";
import { ProdutoType } from "../../../api/types/ProdutoType";



const SacolaScreen = (props: ISacolaScreenProps) => {
    /*===================================================================================================*/
    /* States
    /*===================================================================================================*/
    const [sacola, setSacola] = React.useState<ProdutoType[]>(props.produtosNaSacola);
    const [valorTotal, setValorTotal] = React.useState<number>(props.valorTotal);
    const [cantinaId, setCantinaId] = React.useState<string>('');

    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    // useEffect(() => { //Request Inicial
    //     const fetchData = async () => {
    //         const sacola = await getCardapio(cantinaId);
    //         setSacola(sacola);
    //     };
    //     fetchData();
    // }, []);

    const handleQuantityChange = (index: number, value: string) => {
        const novosItens = [...sacola];
        novosItens[index] = {
            ...novosItens[index],
            quantidade: parseInt(value, 10)
        };
        setSacola(novosItens);
    };

    return (

        <View>
            <HStack>
                
            </HStack>
        </View>

    );
};

export default SacolaScreen;