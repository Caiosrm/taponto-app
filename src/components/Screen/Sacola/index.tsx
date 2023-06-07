import React, { useEffect } from "react";
import { View, Text, Box, FlatList, Avatar, Button, HStack, Icon, Spacer, VStack, Center, ScrollView } from "native-base";
import { ISacolaScreenProps } from "./types";
import TopBar from "../../Common/TopBar";
import { colors } from "../../../themes/Theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ProdutoType } from "../../../api/types/ProdutoType";



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
            const sacola = await getCardapio();
            setSacola(sacola);
        };
        fetchData();
    }, []);


    /*===================================================================================================*/
    /* handleChange's
    /*===================================================================================================*/
    const handleQuantityChange = (index: number, value: string) => {
        const novosItens = [...sacola];
        novosItens[index] = {
            ...novosItens[index],
            quantidade: parseInt(value, 10)
        };
        setSacola(novosItens);
    };

    return (
        <View>
            <ScrollView>

                <TopBar />

                <Box padding={2} flex={1} backgroundColor={colors.light.background}>

                    <FlatList data={sacola} renderItem={({ item }) =>
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
                                    >{item.nome}
                                    </Text>
                                    <Text
                                        _dark={{ color: "warmGray.50" }}
                                        color="#000000"
                                    >{item.cantinaId}
                                    </Text>
                                    <Text
                                        _dark={{ color: "coolGray.800" }}
                                        color="#000000"
                                    >R${item.valor}
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
                        </Box>
                    } keyExtractor={item => item.id}
                    />
                </Box>
            </ScrollView>
            <Box
                shadow={2}
                bg={colors.light.brancoPuro}
                padding={5}
            >
                <Box marginBottom={5} justifyContent='space-between' flexDirection='row'>
                    <Text>Total:</Text>
                    <Text>R$ {props.valorTotal}</Text>
                </Box>
                <Button>Confirmar</Button>
            </Box>
        </View>
    );
};

export default SacolaScreen;

function getCardapio() {
    throw new Error("Function not implemented.");
}
