import React from 'react'
import { CardapioType } from '../../../api/types/CardapioType'
import { Box, Container, View, Text, Card, Image } from 'native-base';
import { colors } from '../../../themes/Theme';
import { Header } from '@react-navigation/stack';
import { ProdutoType } from '../../../api/types/ProdutoType';

type ProductCardProps = {
    name: string;
    quantity: number;
    value: number;
    previewImage: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    quantity,
    value,
    previewImage,
}) => {
    return (
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
    );
};

export const ManterProdutosScreen = () => {

    const [cardapio, setCardapio] = React.useState<CardapioType[]>();
    const [produto, setProduto] = React.useState<ProdutoType>();

    return (
        <ProductCard name={'Produto 1'} quantity={10} value={3} previewImage={''}/>
    );
}
