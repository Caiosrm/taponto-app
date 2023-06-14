import React, { useEffect } from "react";
import { View, HStack, Text, Box, Image, FlatList, Button } from "native-base";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { HeaderCantina } from "../../Common/Header";
import { CardapioType, initialStateCardapio } from "../../../api/types/CardapioType";
import { getCardapio } from "../../../api/utils/get/getCardapio";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../themes/Theme";
import { SacolaType, initialStateSacola } from "../../../api/types/SacolaType";
import { useNavigation } from '@react-navigation/native';



const SacolaScreen: React.FC<SacolaType> = ({ id, idCliente, valorTotal, itens }) => {
    /*===================================================================================================*/
    /* States
    /*===================================================================================================*/
    const [sacola, setSacola] = React.useState<SacolaType>(initialStateSacola);
    const [cantinaId, setCantinaId] = React.useState<string>('Madrugao Lanches');

    const [cardapio, setCardapio] = React.useState<CardapioType>(initialStateCardapio);

    const navigation = useNavigation();

    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    useEffect(() => {
        const obterDados = async () => {
            const cardapio = await getCardapio(cantinaId);
            setCardapio(cardapio);
        };
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
		navigation.goBack();
	};



    return (

        <View>
            <Box>
                <Box>
                    <HeaderCantina pageTitle={"Sacola"} />
                </Box>
                
                <Image position='absolute' top='110' left='5' source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }} alt="Imagem  da cantina" size='md' />

                <Box mt={2} flexDirection='row' justifyContent='center' alignItems='center'>
               
                    <Ionicons name="md-checkmark-circle" size={24} color="green" />
                    <Text>Cantina aberta</Text>

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
                            <Box padding={3} borderWidth={1} borderColor={colors.light.brancoPuro} flex={1} flexDirection='row' mt={2} >
                                <Box alignItems='center' flexDirection='row' w='70%'>
                                    <Box marginRight={5}>
                                        <Image borderRadius={10} source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }} alt="Imagem  do Produto" size='sm' />

                                    </Box>
                                    <Box>
                                        <Text> 5 Und</Text>
                                        <Text>Sanduiche</Text>
                                        <Text>Sem queijo</Text>
                                    </Box>

                                </Box>
                                <Box justifyContent='center'>

                                    <Text>R$ 12,00</Text>
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