import React, { useEffect } from 'react'
import { Box, View, Text, Image, Container, ScrollView } from 'native-base';

import { ProdutoType, initialStateProduto } from '../../../api/types/ProdutoType';
import { getCardapio } from '../../../api/utils/get/getCardapio';
import { CardapioType, initialStateCardapio } from '../../../api/types/CardapioType'
import { HeaderCantina } from '../../Common/Header';

type ProductCardProps = {
    name?: string;
    quantity?: number;
    value?: number;
    previewImage?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, quantity, value, previewImage, }) => {
    return (
        <Container>
            <Box
                bg="white"
                shadow={2}
                rounded="md"
                p={4}
                mt={4}
                borderWidth={1}
                borderColor="gray.200"
            >
                <Image source={{ uri: previewImage }} height={200} mb={2} />
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                    {name}
                </Text>
                <Text fontSize="md" mb={2}>
                    Quantidade: {quantity}
                </Text>
                <Text fontSize="md">Valor: R${value.toFixed(2)}</Text>
            </Box>
        </Container>
    );
};

export const ManterProdutosScreen = () => {

    const [cardapio, setCardapio] = React.useState<CardapioType>(initialStateCardapio);
    const [produto, setProduto] = React.useState<ProdutoType>(initialStateProduto);

    useEffect(() => {
        const fetchCardapio = async () => {
            const cantinaId = cardapio.cantinaId;
            try {
                const apiResponse = await getCardapio(cantinaId); // Chame a função getCardapio para obter os dados do cardápio
                setCardapio(apiResponse); // Atualize o estado do cardápio com os dados obtidos
            } catch (error) {
                console.log('Erro ao obter o cardápio:', error);
            }
        };

        fetchCardapio();
    }, []);

    return (
        <ScrollView>

            <View>

                <HeaderCantina />
                <ProductCard
                    name={produto?.nome}
                    quantity={produto?.quantidade}
                    value={produto?.valor}
                    previewImage={produto?.imagem}
                />
            </View>

        </ScrollView>
    );
}
