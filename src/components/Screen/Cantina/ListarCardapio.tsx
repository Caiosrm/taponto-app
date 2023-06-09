import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon } from "native-base";
import React, { useEffect } from "react";

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";

import { colors } from "../../../themes/Theme";
import TopBar from "../../Common/TopBar";
import { getAllProdutos } from "../../../api/utils/get/getAllProduct";
import { ProdutoType } from "../../../api/types/ProductType";

const ListarCardapio = () => {
    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<ProdutoType[]>([]);


    //===================================================== useEffect's =======================================================
    useEffect(() => {
        const fetchData = async () => {
            const produtos = await getAllProdutos();
            setProdutos(produtos);
            console.log(produtos)
        };
        fetchData();


    }, []);


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