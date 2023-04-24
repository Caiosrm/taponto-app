import { View, Text, HStack, Stack, Box, Heading, AspectRatio, ScrollView } from "native-base";
import React, { useEffect } from "react";

import { TouchableOpacity } from "react-native";
import { ICardapioScreenProps } from "./types";
import { getProdutos } from "../../../api";


const CardapioScreen = (props: ICardapioScreenProps) => {

    //===================================================== State's ===========================================================
    const [produtos, setProdutos] = React.useState<any[]>(props.produtosNoCardapio);



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


    }, [CardapioScreen]);


    //===================================================== HandleChange's ====================================================







    getProdutos()


    return (
        <>
            <ScrollView>
                <View alignItems='flex-start'>
                    <HStack flexWrap='wrap'>
                        <Box maxWidth={80} margin={2} flexBasis='30%' rounded='lg' overflow='hidden' borderColor='coolGray.200' borderWidth='1' flex={1}>
                            <TouchableOpacity>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        {/* <Image source={'Imgsalgado'} alt='teste' /> */}
                                    </AspectRatio>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2} maxHeight={32} overflow="hidden">
                                        <Heading size="xs" ml="1">
                                            teste
                                        </Heading>
                                    </Stack>
                                    <Text fontWeight="400">teste</Text>
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

export default CardapioScreen;



