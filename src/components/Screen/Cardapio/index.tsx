import { View, Text, HStack, Stack, Box, Heading, AspectRatio, Image, ScrollView } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { menuItems } from "../../../utils/cardapioData";
import { ICardapioProps } from "./types";
import AppBar from "../../Common/AppBar";
import { pegarProduto } from "../../../../firebaseConfig";


const CardapioScreen = (props: ICardapioProps) => {
    //================================================================
    //STATES
    //================================================================
    const [produtos, setProdutos] = useState<any[]>([])


    useEffect(() => {
        async function carregarDados() {
            const produtosdoFirestore = await pegarProduto()
            setProdutos(produtosdoFirestore)
            console.log(produtos)
        }
        carregarDados()
    }, []);

    return (
        <>
            <ScrollView>
                <View alignItems='flex-start'>
                    <HStack flexWrap='wrap'>
                    
                            <Box
                                maxWidth={80}
                                margin={2}
                                flexBasis='30%'
                                rounded='lg'
                                overflow='hidden'
                                borderColor='coolGray.200'
                                borderWidth='1'
                                flex={1}
                            >
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



