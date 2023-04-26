import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme } from "native-base";
import React, { useEffect } from "react";

import { FlatList, TouchableOpacity } from "react-native";
import { ICardapioScreenProps } from "./types";
import { getAllProdutos } from "../../../api/getAllProdutos";
import { colors } from "../../../themes/Theme";
import { IProduto } from "./types";
import { lerJSONEnviarFirebase } from "../../../api/postProduto";
import AppBar from "../../Common/AppBar";

const ListarCardapio = (props: ICardapioScreenProps) => {
    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<IProduto[]>([]);

    //===================================================== useEffect's =======================================================
    useEffect(() => {
        const fetchData = async () => {
            const produtos = await getAllProdutos();
            setProdutos(produtos);
        };
        console.log("ListarCardapio => Produtos => ", produtos);
        fetchData();
    }, []);

    const handleQuantidade = () => {

    }

    //===================================================== HandleChange's ====================================================
    return (
        <Box padding={2} flex={1} backgroundColor={colors.light.background}>
            <AppBar pageTitle={props.pageTitle} />
            <Image
                marginBottom={3}
                resizeMode="contain"
                w='100%' h={100}
                source={{ uri: "https://static.ifood-static.com.br/image/upload//capa/2e948cfa-911a-4e78-80aa-9cc66c04aeb8/202210281613_em0g_i@2x.jpg" }} alt="Alternate Text" />
            <FlatList data={produtos} renderItem={({ item }) =>
                <Box
                    shadow={2}
                    justifyContent='center'
                    padding={5} h={120}
                    borderRadius={5}
                    marginBottom={3}
                    backgroundColor={colors.light.brancoPuro}
                    py="2"
                >
                    <HStack alignItems='center' space={[2, 3]} justifyContent="space-between">
                        <Avatar size="90px" source={{
                            uri: ""
                        }} />
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.nome}
                            </Text>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" >
                                {item.lanchonete}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                R${item.valor}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Box alignItems='center'>
                            <Box flexDirection='row' alignItems='center' justifyContent='center'>

                                <TouchableOpacity>
                                    <Button 
   
                                    backgroundColor='none'>

                                    </Button>
                                </TouchableOpacity>
                                <Text>{item.quantidade}</Text>
                                <TouchableOpacity>
                                    <Button backgroundColor='none' >

                                    </Button>
                                </TouchableOpacity>
                            </Box>


                        </Box>
                    </HStack>
                </Box>} keyExtractor={item => item.id} />
        </Box>
    );
};

export default ListarCardapio;