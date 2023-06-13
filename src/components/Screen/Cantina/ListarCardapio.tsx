import { Text, Box, Image, View, Input } from "native-base";
import React, { useEffect } from "react";

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../../themes/Theme";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { CardapioType, initialStateCardapio } from "../../../api/types/CardapioType";
import { HeaderCantina } from "../../Common/Header";
import { Logo } from '../../../../assets/Rectangle229.png'


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
        const obterDados = async () => {
            const cardapio = await getCardapio(cantinaId);
            setCardapio(cardapio);
        };
        console.log("Route Params: ", route.params)
        obterDados();
    }, []);

    const handleFormatCurrency = (value: number): string => {
        const formattedValue = value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        return formattedValue;
      };

    return (
        <View>
            <Box>
            <Box>
                <HeaderCantina pageTitle={cantinaId} />
            </Box>
            
            <Image position='absolute' top='110' left='5'  source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Imagem  da cantina" size='md' />
            

            </Box>

            <Box justifyContent='center' alignItems='center' padding={7}>
                <Text fontSize='26'>Cardápio</Text>
                <Text textAlign='center'>Onde você encontra todos os produtos, ordenados ou filtrados</Text>

            </Box>
            <Box padding={5}>

                <Input placeholder="Pesquise pelo nome"
                    fontSize={16}
                    bg='#e6e6e6'
                    borderWidth={0}
                    borderRadius={10}
                    padding={2}

                    InputRightElement={
                        <Box marginRight={2}>
                            <Ionicons name="filter" size={24} color={colors.light.azulTurquesa} />
                        </Box>} />
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
                                <Text>{handleFormatCurrency(item.valor)}</Text>

                                <Box mt={2}>
                                    <TouchableOpacity>
                                        <Ionicons name="add-circle" size={24} color={colors.light.azulTurquesa} />
                                    </TouchableOpacity>
                                </Box>

                            </Box>
                                <Box>
                                <Image  source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Imagem  do Produto" size='lg' />
                            </Box>


                        </Box>
                    </Box>
                )}
            />









        </View>
    );
};

export default ListarCardapio;






