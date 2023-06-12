import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon, View, Heading } from "native-base";
import React, { useEffect } from "react";

import { getFirestore } from '@firebase/firestore';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../../themes/Theme";
import TopBar from "../../Common/TopBar";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { CardapioType, initialStateCardapio } from "../../../api/types/CardapioType";
import { HeaderCantina } from "../../Common/Header";


interface ICardapioProps {
    pageTitle?: string;
    cantinaId: string;
    cardapio: CardapioType;
}

const ListarCardapio: React.FC = ({ navigation, route }: any) => {
    //===================================================== State's ===========================================================
    const [cardapio, setCardapio] = React.useState<CardapioType>(initialStateCardapio);
    const [cantinaId, setCantinaId] = React.useState<string>(route.params.cantinaId);


    //===================================================== useEffect's =======================================================
    useEffect(() => {
        console.log("Route Params: ", route.params)
        obterDados();
    }, []);

    const obterDados = async () => {
        const cardapio = await getCardapio(cantinaId);
        setCardapio(cardapio);
    };

    return (
        <View>
            <HeaderCantina pageTitle={"Cantina x "} />
            <Box backgroundColor={colors.light.brancoPuro} marginBottom={5}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => String(item)}
                    pagingEnabled
                    data={cardapio?.itens}
                    renderItem={({ item }) =>
                        <Box padding={5}>
                            <Box flexDirection='row' alignItems='left'>
                                <TouchableOpacity>
                                    <Text textAlign='center' fontSize="xs" color="black">
                                        {item.nome + " " + item.tipo}
                                    </Text>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    }
                />
            </Box>
        </View>
    );
};

export default ListarCardapio;