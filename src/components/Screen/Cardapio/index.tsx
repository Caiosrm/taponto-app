import { View, Text, HStack, Stack, Box, Heading, AspectRatio, Image, ScrollView, Icon, IconButton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react";


import theme from "../../../themes/Theme";
import { TouchableOpacity } from "react-native";

const menuItems = [
    {
        id: 1,
        price: '25,00',
        description: 'Prato feito',
        image: 'https://stories.tudogostoso.com.br/confira-ideias-de-prato-feito/assets/4.jpeg',
    },
    {
        id: 2,
        price: '10,00',
        description: 'Salgado + refri',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgou44RHyO-jkvdiUQ7YJfclwlsOQK1vvuSpgEzi7AOGUDYwzbx6vu0LX2KHkfSfmcdNYJV5bVq0N6Ed1FzcTk6A452-5fs0qouXpeKGydZJzcLHQp0dVd00K2e4QIXjoxFV_IX2hyS8iGjslat6h-r51zFgLtDoplog75pPJYZTajMyks7M4yyol2G/s757/combo%20de%20salgados%20na%20caixa.webp',
    },
    {
        id: 3,
        price: '12,00',
        description: 'Bolo confeitado + refri',
        image: 'https://riomarfortalezaonline.com.br/fortalezashopping/2022/11/1-Fatia-Bolo-Refrigerante-%E2%80%93-Lata-350-ml.png',
    },
    {
        id: 4,
        price: '12,00',
        description: 'Bolo confeitado + refri',
        image: 'https://riomarfortalezaonline.com.br/fortalezashopping/2022/11/1-Fatia-Bolo-Refrigerante-%E2%80%93-Lata-350-ml.png',
    },



];


const CardapioScreen = () => {

    const [cartItems, setCartItems] = useState<any>([]);

    const addToCart = (item: any) => {
        setCartItems([...cartItems, item]); // Adiciona o item ao array de itens do carrinho
    }

    return (
        <>
            <ScrollView>
                <View alignItems='flex-start'>
                    <HStack flexWrap='wrap'>
                        {menuItems.map((item) => (
                            <Box
                                key={item.id}
                                maxWidth={80}
                                margin={2}
                                flexBasis='30%'
                                rounded='lg'
                                overflow='hidden'
                                borderColor='coolGray.200'
                                borderWidth='1'
                                flex={1}
                            >
                                <TouchableOpacity onPress={() => addToCart(item)}>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={{ uri: item.image }} alt={item.description} />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <Stack space={2} maxHeight={32} overflow="hidden">
                                            <Heading size="xs" ml="1">
                                                {item.description}
                                            </Heading>

                                        </Stack>
                                        <Text fontWeight="400">{item.price}</Text>
                                    </Stack>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </HStack>
                </View>
            </ScrollView>
            <View>
                {menuItems.map((item) => (
                    <Text key={item.id}>
                        {cartItems.filter((cartItem: { id: number; }) => cartItem.id === item.id).length}
                    </Text>
                ))}
            </View>

        </>
    );
};

export default CardapioScreen;



