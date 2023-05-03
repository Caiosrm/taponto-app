import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme, Icon } from "native-base";
import React, { useEffect } from "react";

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native";
import { ICardapioProps, IProduto, initialStateProduto } from "./types";
import { getAllProdutos } from "../../../api/requests/getAllProdutos";
import { colors } from "../../../themes/Theme";
import AppBar from "../../Common/AppBar";

const ListarCardapio = (props: ICardapioProps) => {
    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<IProduto[]>([]);
    const [produto, setProduto] = React.useState<IProduto>(initialStateProduto);
    //===================================================== useEffect's =======================================================
    useEffect(() => {
        const fetchData = async () => {
            const produtos = await getAllProdutos();
            setProdutos(produtos);
        };
        fetchData();

        
    }, []);


    //===================================================== HandleChange's ====================================================
    return (
        <Box
            padding={2}
            flex={1}
            backgroundColor={colors.light.background}
        >
            <AppBar pageTitle={props.pageTitle} />

            <FlatList 
            data={produtos} 
            renderItem={({ item }) =>
                <Box
                    shadow={2}
                    justifyContent='center'
                    padding={5} h={120}
                    borderRadius={5}
                    marginBottom={3}
                    backgroundColor={colors.light.brancoPuro}
                    py="2"
                >
                    <HStack
                        alignItems='center'
                        space={[2, 3]}
                        justifyContent="space-between"
                    >
                        <Avatar
                            size="90px"
                            source={{ uri: item.imagem }}
                        />
                        <VStack>
                            <Text
                                _dark={{ color: "warmGray.50" }}
                                color="#000000"
                                bold
                            >{item.nome}
                            </Text>
                            <Text
                                _dark={{ color: "warmGray.50" }}
                                color="#000000"
                            >{item.lanchonete}
                            </Text>
                            <Text
                                _dark={{ color: "coolGray.800" }}
                                color="#000000"
                            >R${item.valor}
                            </Text>
                        </VStack>
                        <Spacer/>
                        <Box
                        alignItems='flex-start'>
                            <Box
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                            >
                                <TouchableOpacity>
                                    <Button backgroundColor='green.400' >
                                        Adicionar à Sacola
                                    </Button>
                                </TouchableOpacity>
                                <Text> Disponíveis: {item.quantidade}</Text>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            } keyExtractor={item => item.id}
            />
        </Box>
    );
};

export default ListarCardapio;