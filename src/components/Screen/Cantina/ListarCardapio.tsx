import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon } from "native-base";
import React, { useEffect } from "react";

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";

import { colors } from "../../../themes/Theme";
import TopBar from "../../Common/TopBar";
import { ProdutoType } from "../../../api/types/ProdutoType";
import { getCardapio } from "../../../api/utils/get/getCardapio";

const ListarCardapio = () => {
    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<ProdutoType[]>([]);
    const [cantinaId, setCantinaId] = React.useState<string>('');

    //===================================================== useEffect's =======================================================
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const produtos = await getCardapio(cantinaId);
        setProdutos(produtos);
        console.log(produtos)
    };

    return (
        

       <VStack  >
        <Box w='100%' h='40' bg='primary.700'>

            <Box flexDirection='row'>
        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />

        <Text textAlign='center' >Cardápio</Text>

            </Box>

        </Box>
        <Box>
            

        </Box>
        
        
        

       </VStack>

    );
};

export default ListarCardapio;