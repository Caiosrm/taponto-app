import { View, Text, HStack, Stack, Box, Heading, AspectRatio, ScrollView } from "native-base";
import React, { useEffect } from "react";

import { TouchableOpacity } from "react-native";
import { ICardapioScreenProps } from "./types";
import { getProdutos } from "../../../api";
import AppBar from "../../Common/AppBar";


const ListarCardapio = (props: ICardapioScreenProps) => {

    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<any[]>(props.produtos); //Array de produtos
    const [produto, setProduto] = React.useState<any>(props.produto); //Objeto produto



    //===================================================== useEffect's =======================================================

    useEffect(() => { //Carrega inicialmente
        async function carregarDados() {
            const data = await getProdutos()
            if (data) {
                setProdutos(data);
            }
        }

        carregarDados();

        setProdutos([]);

    }, []);

    useEffect(() => { //Recarrega quando algo muda no componente principal


    }, [ListarCardapio]);


    //===================================================== HandleChange's ====================================================

    getProdutos()


    return (
        <>
            <ScrollView>
                <AppBar pageTitle={props.pageTitle} />
                <View alignItems='flex-start'>
                    <HStack flexWrap='wrap'>
                        <Box maxWidth={80}
                            margin={2}
                            flexBasis='30%'
                            rounded='lg'
                            overflow='hidden'
                            borderColor='coolGray.200'
                            borderWidth='1'
                            flex={1}>
                            <TouchableOpacity>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                    </AspectRatio>
                                </Box>
                                <Stack p="4" space={3} >
                                    <Stack space={2} overflow="hidden"  >
                                        <Heading size="xs">
                                            Coxinha de Frango
                                        </Heading>
                                    </Stack>
                                    <Text fontWeight="200" fontSize={"2xs"}>
                                        Disponíveis: {props.produto.estoque}
                                    </Text>
                                    <Text fontWeight="400">
                                        R$ 7,00
                                    </Text>
                                </Stack>
                            </TouchableOpacity>
                        </Box>
                    </HStack>
                </View>
            </ScrollView>
            <View>
            </View>
        </>
    );
};

export default ListarCardapio;



