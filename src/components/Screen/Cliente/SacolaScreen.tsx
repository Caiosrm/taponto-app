import React, {  } from "react";
import { View, HStack } from "native-base";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { SacolaType } from "../../../api/types/SacolaType";



const SacolaScreen = (props: SacolaType) => {
    /*===================================================================================================*/
    /* States
    /*===================================================================================================*/
    const [cantinaId, setCantinaId] = React.useState<string>('');
    const [sacola, setSacola] = React.useState<SacolaType>(props);
    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/






    return (

        <View>
            <HStack>
                
            </HStack>
        </View>

    );
};

export default SacolaScreen;