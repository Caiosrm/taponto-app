import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Box, VStack, Image } from "native-base";
import { ISacolaScreenProps } from "./types";
import TopBar from "../../Common/TopBar";
import { colors } from "../../../themes/Theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { getAllProdutos } from "../../../api/utils/get/getAllProduct";
import { ProdutoType } from "../../../api/types/ProductType";
import Logo from '../../../../assets/logorestaurante.jpg'



const SacolaScreen = (props: ISacolaScreenProps) => {
    /*===================================================================================================*/
    /* States
    /*===================================================================================================*/
    const [sacola, setSacola] = React.useState<ProdutoType[]>(props?.produtosNaSacola);
    const [valorTotal, setValorTotal] = React.useState<number>(props.valorTotal);

    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    useEffect(() => { //Request Inicial
        const fetchData = async () => {
            const sacola = await getAllProdutos();
            setSacola(sacola);
        };
        fetchData();
    }, []);

    const handleQuantityChange = (index: number, value: string) => {
        const novosItens = [...sacola];
        novosItens[index] = {
            ...novosItens[index],
            quantidade: parseInt(value, 10)
        };
        setSacola(novosItens);
    };

    return (
        <VStack >

            <Box w='100%' h='50%' bg='primary.700' position='relative'>
                <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
                <Text textAlign='center'>Minha Sacola</Text>

                <Box position='absolute' left='5' top='20%' >
                    <Image size='lg' source={Logo} alt="logo restaurante" />
                </Box>

            </Box>
            <Box borderColor='red.200' mt={10} ml={5} alignItems='center' flexDirection='row'>
                <Image size='lg' source={Logo}/>
                <Box>
                    <Text>Sanduiche</Text>
                    <Text>sem queijo</Text>
                </Box>
                <Text>R$ 15,00</Text>
            </Box>

            

        </VStack>
    );
};

export default SacolaScreen;