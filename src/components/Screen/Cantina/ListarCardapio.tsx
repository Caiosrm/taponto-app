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
                        <Avatar size="90px" />

                        <VStack>
                            <Text
                                _dark={{ color: "warmGray.50" }}
                                color="#000000"
                                bold
                            >
                                {item.nome}
                            </Text>
                            <Text
                                _dark={{ color: "warmGray.50" }}
                                fontSize={'xs'}
                                color="#000000"
                            >
                                {item.quantidade} disponíveis
                            </Text>
                            <Text
                                _dark={{ color: "coolGray.800" }}
                                color="#000000"
                            >
                                R${item.valor}
                            </Text>
                        </VStack>

                        <Spacer />

                        <Box alignItems='center'>
                            <Box flexDirection='row' alignItems='center' justifyContent='center'>
                                <TouchableOpacity>
                                    <Button
                                        backgroundColor='none'
                                    >
                                        <Icon as={Ionicons}
                                            name="ios-add"
                                            size="sm"
                                            color="green.300"
                                        />
                                    </Button>
                                </TouchableOpacity>
                                <Text>
                                    {item.quantidade}
                                </Text>
                                <TouchableOpacity>
                                    <Button
                                        backgroundColor='none'
                                    >
                                        <Icon as={Ionicons}
                                            name="ios-remove"
                                            size="sm"
                                            color="red.300"
                                        />
                                    </Button>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </HStack>
                </Box >
            } keyExtractor={item => item.id}
        />

    );
};

export default ListarCardapio;