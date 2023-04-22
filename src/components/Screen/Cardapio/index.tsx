<<<<<<< HEAD
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

=======
import { View, Text, HStack, Stack, Box, Heading, AspectRatio, Image, ScrollView, Icon, IconButton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Imgsalgado from '../Cardapio/salgado.jpg'
import React, { useEffect, useState } from "react";

import theme from "../../../themes/Theme";
import { TouchableOpacity } from "react-native";
import { pegarProduto } from "../../../../firebaseConfig";





const CardapioScreen = () => {
    const [produtos, setProdutos]= useState<any[]>([])
    useEffect(() => {
       

        async function carregarDados () {
            const produtosdoFirestore = await pegarProduto()
            setProdutos(produtosdoFirestore)
            console.log(produtos)
        }
        carregarDados()
    }, []);
    

    pegarProduto()

   

>>>>>>> b9b83f1fc5088d72b4fd9b2cb5f1166854b56703
    return (
        <>
            <ScrollView>
                <View alignItems='flex-start'>
                    <HStack flexWrap='wrap'>
                    
                            <Box
<<<<<<< HEAD
=======
                            
>>>>>>> b9b83f1fc5088d72b4fd9b2cb5f1166854b56703
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
<<<<<<< HEAD
                                            {/* <Image source={'Imgsalgado'} alt='teste' /> */}
=======
                                            <Image source={Imgsalgado} alt='teste' />
>>>>>>> b9b83f1fc5088d72b4fd9b2cb5f1166854b56703
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



