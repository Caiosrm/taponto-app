import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Box, FlatList, Avatar, Button, HStack, Icon, Spacer, VStack } from "native-base";
import { ISacolaScreenProps } from "./types";
import AppBar from "../../Common/AppBar";
import { colors } from "../../../themes/Theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { IProduto } from "../Cardapio/types";
import { getAllProdutos } from "../../../api/utils/getAllProdutos";

const SacolaScreen = (props: ISacolaScreenProps) => {

    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<IProduto[]>([]);
    const [valorTotal, setValorTotal] = React.useState<number>();


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
        <View>
            <AppBar pageTitle={props.pageTitle} />
            <Box
                padding={2}
                flex={1}
                backgroundColor={colors.light.background}
            >
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
                            <Spacer />
                            <Box alignItems='center'>
                                <Box
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                >
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
                                    <Text>{item.quantidade}</Text>
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
                    </Box>
                } keyExtractor={item => item.id}
                />
            </Box>
        </View>
    );
};

export default SacolaScreen;
;