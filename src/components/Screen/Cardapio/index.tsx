import { View, Text, HStack, Stack, Box, Heading, AspectRatio, Image, ScrollView } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { menuItems } from "../../../utils/cardapioData";


const CardapioScreen = () => {

    //================================================================
    //STATES
    //================================================================
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
                        {cartItems.filter((cartItem: { id: number; }) => cartItem.id === item.id).length}
                    </Text>
                ))}
            </View>

        </>
    );
};

export default CardapioScreen;



