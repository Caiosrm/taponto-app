import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon, View, Heading, Stack, Center, AspectRatio, Row, Input } from "native-base";
import React, { useEffect } from "react";

import { getFirestore } from '@firebase/firestore';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../../themes/Theme";
import TopBar from "../../Common/TopBar";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { CardapioType, initialStateCardapio } from "../../../api/types/CardapioType";
import { HeaderCantina } from "../../Common/Header";
import productFeaturedImage from '../../../../assets/product-featured.png';
import { color } from "native-base/lib/typescript/theme/styled-system";


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
            <Box>
                <HeaderCantina pageTitle={cantinaId} />
            </Box>

            <Box justifyContent='center' alignItems='center' padding={7}>
                <Text fontSize='26'>Cardápio</Text>
                <Text textAlign='center'>Onde você encontra todos os produtos, ordenados ou filtrados</Text>
                <Input placeholder="Pesquise pelo nome " mt={5} w='100%' />
            </Box>

            <FlatList
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => String(item)}
                pagingEnabled
                data={cardapio?.itens}
                renderItem={({ item }) => (
                    <Box padding={2}>
                        <Box alignItems='center' borderWidth={1} borderColor={colors.light.brancoPuro} justifyContent='space-around' flex={1} flexDirection='row' mt={2} >
                            <Box justifyContent='center' h='150px' w='60%'>
                                <Text color={colors.light.azulTurquesa}>{item.nome + " " + item.tipo}</Text>
                                <Text>{item.descricao}</Text>
                                <Text>R${item.valor}</Text>

                                <Box mt={2}>
                                    <TouchableOpacity>
                                        <Ionicons name="add-circle" size={24} color={colors.light.azulTurquesa} />
                                    </TouchableOpacity>
                                </Box>

                            </Box>

                            <Box>
                                <Text>imagem</Text>
                            </Box>

                        </Box>
                    </Box>
                )}
            />









        </View>
    );
};

export default ListarCardapio;






