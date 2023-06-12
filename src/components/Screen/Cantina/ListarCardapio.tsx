import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon, View, Heading } from "native-base";
import React, { useEffect } from "react";

import { getFirestore } from '@firebase/firestore';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../../themes/Theme";
import TopBar from "../../Common/TopBar";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { CardapioType } from "../../../api/types/CardapioType";


interface ICardapioProps {
    pageTitle?: string;
    cantinaId: string;
    cardapio: CardapioType;
}

const ListarCardapio = ({ navigation, route }: any) => {
    //===================================================== State's ===========================================================
    const [cardapio, setCardapio] = React.useState<CardapioType>();
    const [cantinaId, setCantinaId] = React.useState<string>(route.params.cantinaId);

    //===================================================== useEffect's =======================================================
    useEffect(() => {
        obterDados();
    }, []);

    const obterDados = async () => {
        console.log("ListarCardapio: ", cantinaId)
        const cardapio = await getCardapio(cantinaId);
        setCardapio(cardapio);
        console.log(cardapio)
    };

    return (

        <Box>
      
    </Box>

    );
};

export default ListarCardapio;