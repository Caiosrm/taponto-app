import { Container, Box, Text, Image } from "native-base";
import { ProductCardProps } from "./types";


export const ProductCard: React.FC<ProductCardProps> = ({ name, quantity, value, previewImage, }) => {
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
                <Image source={{ uri: previewImage }} height={200} mb={2} alt="Imagem do Produto" />
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