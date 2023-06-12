import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon, View, Heading, Stack, Center, AspectRatio, Row, Input } from "native-base";
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
import productFeaturedImage from '../../../../assets/product-featured.png';


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
            <HeaderCantina pageTitle={cantinaId} />
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
                numColumns={2}
                renderItem={({ item }) => (
                    <Box padding={4} flex={1} flexDirection='column' mt={2} justifyContent='center'>
                        <Box marginBottom={2} alignItems="center">
                            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        <Image source={{
                                            uri: "https://i2.wp.com/files.agro20.com.br/uploads/2020/03/comidabrasileira3.jpg?resize=600%2C338&ssl=1"
                                        }} alt="image" />
                                    </AspectRatio>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            {item.nome + " " + item.tipo}
                                        </Heading>
                                        <Text fontSize="xs" _light={{
                                            color: "violet.500"
                                        }} _dark={{
                                            color: "violet.400"
                                        }} fontWeight="500" ml="-0.5" mt="-1">
                                            The Silicon Valley of India.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                )}
            />





        </View>
    );
};

export default ListarCardapio;






