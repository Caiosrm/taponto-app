import { Text, HStack, Box, Avatar, VStack, Spacer, Button, Image, useTheme } from "native-base";
import React, { useEffect } from "react";

import { FlatList, TouchableOpacity } from "react-native";
import { ICardapioScreenProps } from "./types";
import { getProdutos } from "../../../api";
import { colors } from "../../../themes/Theme";
import { IProduto } from "./types";

const ListarCardapio = (props: ICardapioScreenProps) => {
    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<IProduto[]>([]);

    //===================================================== useEffect's =======================================================
    useEffect(() => {
        const fetchData = async () => {
            const produtos = await getProdutos();
            setProdutos(produtos);
        };
        console.log("Produtos", produtos);
        fetchData();
    }, []);


    //===================================================== HandleChange's ====================================================


    return (
        <Box padding={2} flex={1} backgroundColor={colors.light.background}>
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
                            uri: item.image
                        }} />
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.description}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.price}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Box alignItems='center'>
                            <Box flexDirection='row' alignItems='center' justifyContent='center'>

                                <TouchableOpacity>
                                    <Button backgroundColor='none' ><Text color='red.600' fontSize='4xl'>+</Text></Button>
                                </TouchableOpacity>
                                <Text>1</Text>
                                <TouchableOpacity>
                                    <Button backgroundColor='none' ><Text color='red.600' fontSize='5xl'>-</Text></Button>
                                </TouchableOpacity>
                            </Box>


                        </Box>
                    </HStack>
                </Box>} keyExtractor={item => item.id} />
        </Box>
    );
};

export default ListarCardapio;