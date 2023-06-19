import React from 'react'
import { PedidoType, initialStatePedido } from '../../../api/types/PedidoType'
import { ScrollView } from 'native-base';

export const PedidosCantinaScreen = () => {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const [pedidos, setPedidos] = React.useState<PedidoType>(initialStatePedido);
    

    return(
        <ScrollView>
            

        </ScrollView>
    );




}
