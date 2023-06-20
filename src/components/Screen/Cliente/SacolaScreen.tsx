import { View, HStack, Text, Box, Image, FlatList, Button } from "native-base";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { CardapioType, initialStateCardapio } from "../../../api/types/CardapioType";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../themes/Theme";
import { SacolaType } from "../../../api/types/SacolaType";
import React, { useContext, useEffect } from "react";
import { HeaderCantina } from "../../Common/Header/HeaderCantina";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';
import { RootStackParamList } from '../../../routes/types';


const SacolaScreen: React.FC<SacolaType> = ({ id, idCliente, valorTotal, itens }, route: any) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const user = useContext(ClienteContext);
    const shop = useContext(CantinaContext);
    /*===================================================================================================*/
    /* States
    /*===================================================================================================*/
    const [sacola, setSacola] = React.useState<ProdutoType[]>();
    const [cantinaId, setCantinaId] = React.useState<string>('Madrugao Lanches');
    const [cardapio, setCardapio] = React.useState<CardapioType>(initialStateCardapio);

    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    useEffect(() => {
        const obterDados = async () => {
            const cardapio = await getCardapio(cantinaId);
            setCardapio(cardapio);
        }
        obterDados();
    }, []);

    const handleFormatCurrency = (value: number): string => {
        const formattedValue = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formattedValue;
    };

    const handleGoBack = () => {
        navigation.navigate('ListarCardapio', );
    };


    return (

        <View>
            <Box>
                <Box>
                    <HeaderCantina pageTitle={"Sacola"} />
                </Box>

                <Box mt={2} flexDirection='row' justifyContent='center' alignItems='center'>

                    <Ionicons name="md-checkmark-circle" size={16} color="green" />
                    <Text> Cantina aberta</Text>

                </Box>
            </Box>
            <Box padding={5}>
                <Box mt={15} h='400px' >
                    <FlatList
                        showsHorizontalScrollIndicator={true}
                        keyExtractor={(item: ProdutoType) => String(item)}
                        pagingEnabled
                        data={cardapio.itens}
                        renderItem={({ item }) => (
                            <Box
                                padding={3}
                                borderWidth={1}
                                borderColor={colors.light.brancoPuro}
                                flex={1}
                                flexDirection='row'
                                mt={2}
                            >
                                <Box alignItems='center' flexDirection='row' w='87%'>
                                    <Box marginRight={5}>
                                        <Image borderRadius={10} source={{ uri: item.imagem }} alt="Imagem  do Produto" size='sm' />

                                    </Box>

                                    <Box>
                                        <Text bold>{item.nome + " " + item.tipo}</Text>
                                    </Box>

                                </Box>
                                <Box justifyContent='center' alignItems={'left'}>
                                    <Text>{handleFormatCurrency(item.valor)}</Text>
                                </Box>
                            </Box>




                        )}
                    />
                    <TouchableOpacity onPress={handleGoBack}>
                        <Box mt={5} justifyContent='center' alignItems='center' flexDirection='row'>
                            <Ionicons name="add-circle-outline" size={24} color={colors.light.azulTurquesa} />
                            <Text color={colors.light.azulTurquesa}>Adicionar mais </Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box mt={5} flexDirection='row' justifyContent='space-between'>
                    <Text>Total:</Text>
                    <Text>R$ 50,00</Text>

                </Box>
                <Button bg={colors.light.azulTurquesa} mt={5}>Confirmar</Button>
            </Box>

        </View>

    );
};

export default SacolaScreen;