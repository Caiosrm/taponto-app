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
    const [cardapio, setCardapio] = React.useState<CardapioType>(route.params.cardapio.itens);
    const [cantinaId, setCantinaId] = React.useState<string>(route.params.cardapio.id);


    //===================================================== useEffect's =======================================================
    useEffect(() => {
        obterDados();
        console.log(route.params)
    }, []);

    const obterDados = async () => {
        console.log("ListarCardapio: ", cantinaId)
        console.log("route.params: ", route.params)
        const cardapio = await getCardapio(cantinaId);
        setCardapio(cardapio);
        console.log(cardapio)
    };

    return (

        <Box //CANTINAS ABERTAS AGORA
            backgroundColor={colors.light.brancoPuro} marginBottom={5}>
            <Heading marginTop={5} fontSize="sm" paddingX={4}>
            teste
            </Heading>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item)}
                pagingEnabled
                horizontal
                data={cardapio?.itens}
                renderItem={({ item }) =>
                    <Box padding={5} >
                        <Box
                            flexDirection='column'
                            alignItems='center'
                        >
                            {console.log(item.id)}
                            <TouchableOpacity >
                                <Avatar />
                                <Text
                                    textAlign='center'
                                    fontSize="xs"
                                    color="black"
                                >
                                    {item.nome}
                                </Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                }
            />
        </Box>

    );
};

export default ListarCardapio;