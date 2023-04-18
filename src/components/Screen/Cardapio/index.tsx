import { View, Text, HStack, Stack, Box, Heading, Center, AspectRatio, Image, ScrollView } from "native-base";
import React from "react";
import AppBar from "../AppBar";

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
        price: '25,00',
        description: 'Prato feito',
        image: 'https://stories.tudogostoso.com.br/confira-ideias-de-prato-feito/assets/4.jpeg',
    },
    {
        id: 5,
        price: '10,00',
        description: 'Salgado + refri',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgou44RHyO-jkvdiUQ7YJfclwlsOQK1vvuSpgEzi7AOGUDYwzbx6vu0LX2KHkfSfmcdNYJV5bVq0N6Ed1FzcTk6A452-5fs0qouXpeKGydZJzcLHQp0dVd00K2e4QIXjoxFV_IX2hyS8iGjslat6h-r51zFgLtDoplog75pPJYZTajMyks7M4yyol2G/s757/combo%20de%20salgados%20na%20caixa.webp',
    },
    {
        id: 6,
        price: '12,00',
        description: 'Bolo confeitado + refri',
        image: 'https://riomarfortalezaonline.com.br/fortalezashopping/2022/11/1-Fatia-Bolo-Refrigerante-%E2%80%93-Lata-350-ml.png',
    },
    





];

const CardapioScreen = () => {
    return (
        <>
            
            <ScrollView>
                <View flexWrap='wrap' alignItems='center'>
                    <HStack flexWrap='wrap' justifyContent='center' space={4}>
                        {menuItems.map((item) => (
                            <Box
                                maxWidth='25%'
                                key={item.id}
                                margin={2}
                                rounded='lg'
                                overflow='hidden'
                                borderColor='coolGray.200'
                                borderWidth='1'
                                _dark={{
                                    borderColor: 'coolGray.600',
                                    backgroundColor: 'gray.700',
                                }}
                                _web={{
                                    shadow: 2,
                                    borderWidth: 0,
                                }}
                                _light={{
                                    backgroundColor: 'gray.50',
                                }}>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        <Image source={{ uri: item.image }} alt={item.description} />
                                    </AspectRatio>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2} maxHeight={32} overflow="hidden">
                                        <Heading size="md" ml="-1">
                                            {item.price}
                                        </Heading>
                                        <Text
                                            fontSize="xs"
                                            maxW={64}
                                            maxH={16}
                                            noOfLines={2}
                                            _light={{
                                                color: 'violet.500',
                                            }}
                                            _dark={{
                                                color: 'violet.400',
                                            }}
                                            fontWeight="500"
                                            ml="-0.5"
                                            mt="-1">
                                            {item.description}
                                        </Text>
                                    </Stack>
                                    <Text fontWeight="400">{item.price}</Text>
                                </Stack>
                            </Box>
                        ))}
                    </HStack>
                </View>
            </ScrollView>
        </>


    );

};

export default CardapioScreen;
