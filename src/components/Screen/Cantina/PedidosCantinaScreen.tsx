import React from 'react'
import { PedidoType, initialStatePedido } from '../../../api/types/PedidoType'
import { ScrollView } from 'native-base';
import { HeaderCantina } from '../../Common/Header/HeaderCantina';
import { CantinaType, initialStateCantina } from '../../../api/types/CantinaType';

export const PedidosCantinaScreen = () => {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const [pedidos, setPedidos] = React.useState<PedidoType>(initialStatePedido);
    const [cantina, setCantina] = React.useState<CantinaType>(initialStateCantina);


    return (
        <ScrollView>
            <HeaderCantina pageTitle='Pedidos' />


        </ScrollView>
    );




}
