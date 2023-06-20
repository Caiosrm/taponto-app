import { Text, Box, Image, View, Input } from "native-base";
import React, { useContext, useEffect } from "react";

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../../themes/Theme";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { CardapioType, initialStateCardapio } from "../../../api/types/CardapioType";
import { HeaderCantina } from "../../Common/Header/HeaderCantina";
import { Logo } from '../../../../assets/Rectangle229.png'
import SacolaScreen from "./SacolaScreen";
import { SacolaType, initialStateSacola } from "../../../api/types/SacolaType";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { handleFormatCurrency } from "../../../utils/handleFormatCurrency";
import { CantinaContext } from "../../../contexts/CantinaContext";
import { ClienteContext } from "../../../contexts/ClienteContext";


interface ICardapioProps {
    pageTitle?: string;
    cantinaId: string;
    cardapio: CardapioType;
}




const ListarCardapio: React.FC = ({ navigation, route }: any) => {
    //===================================================== State's ===========================================================
    const [cantinaId, setCantinaId] = React.useState<string>(route.params.cantinaId);
    const [cardapio, setCardapio] = React.useState<CardapioType>(initialStateCardapio);
    const [sacola, setSacola] = React.useState<SacolaType>(initialStateSacola);
    const [totalItens, setTotalItens] = React.useState<number>(0);
    const [imagem, setImagem] = React.useState<any>();

    const cliete = useContext(ClienteContext);
    const cantina = useContext(CantinaContext);
    //===================================================== useEffect's =======================================================
    useEffect(() => {
        console.log("Route Params: ", route.params)
        obterCardapio();
    }, []);

    const countItems = (sacola: SacolaType) => {
        if (sacola.itens) {
            const totalItems = sacola.itens.reduce((total, item) => total + item.quantidade, 0);
            setTotalItens(totalItems);
        }
    };

    const obterCardapio = async () => {
        const cardapio = await getCardapio(cantinaId);
        if (cardapio) {
            setCardapio(cardapio);
        }
        else return (<Text>Loja sem produtos no cardápio!</Text>)
    };

    const handleAddToCart = (product: ProdutoType) => {
        if (sacola.itens) {
            setSacola({
                ...sacola,
                itens: [...sacola.itens, product],
            });
            countItems(sacola); // Atualiza a contagem de itens
        }
    };

    const handleRemoveFromCart = (productId: string) => {
        if (sacola.itens) {
            setSacola({
                ...sacola,
                itens: sacola.itens.filter(item => item.id !== productId),
            });
            countItems(sacola); // Atualiza a contagem de itens
        }
    };



    return (
        <View>
            <Box>
                <Box>
                    <HeaderCantina pageTitle={cantinaId} />
                </Box>

                <Image
                    position='absolute'
                    top='110'
                    left='5'
                    source={{ uri: cantina.cantina.imagem }}
                    alt="Imagem da cantina"
                    size='md'
                />
            </Box>

            <Box
                justifyContent='center'
                alignItems='center'
                padding={7}
            >
                <Text fontSize='22'>
                    Cardápio
                </Text>
                <Text textAlign='center'>
                    Onde você encontra todos os produtos, ordenados ou filtrados
                </Text>

            </Box>
            <Box padding={5}>

                <Input
                    placeholder="Pesquise pelo nome"
                    fontSize={16}
                    bg='#e6e6e6'
                    borderWidth={0}
                    borderRadius={10}
                    padding={2}
                    InputRightElement={
                        <Box marginRight={2}>
                            <Ionicons name="filter" size={24} color={colors.light.azulTurquesa} />
                        </Box>
                    }
                />
            </Box>

            <FlatList
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => String(item)}
                pagingEnabled
                data={cardapio?.itens}
                renderItem={({ item }) => (
                    <Box padding={2}>
                        <Box
                            alignItems='center'
                            borderWidth={1}
                            borderColor={colors.light.brancoPuro}
                            justifyContent='space-around'
                            flex={1}
                            flexDirection='row'
                            mt={2}
                        >
                            <Box
                                justifyContent='center'
                                h='150px'
                                w='60%'
                            >
                                <Text color={colors.light.azulTurquesa}>
                                    {item.nome + " " + item.tipo}
                                </Text>
                                <Text>
                                    {item.descricao}
                                </Text>
                                <Text>
                                    {handleFormatCurrency(item.valor)}
                                </Text>

                                <Box mt={2}>
                                    <TouchableOpacity>
                                        <Ionicons
                                            name="add-circle"
                                            size={24}
                                            color={colors.light.azulTurquesa}
                                            onPress={() => handleAddToCart(item)}
                                        />
                                    </TouchableOpacity>
                                </Box>

                            </Box>

                            <Box>
                                <Image source={{ uri: item.imagem }} alt="Imagem do Produto" size='lg' />
                            </Box>

                        </Box>
                    </Box>
                )}
            />

        </View>
    );
};

export default ListarCardapio;






