import { Container, Box, Text, Image } from "native-base";
import { ProductCardProps } from "./types";
import { handleFormatCurrency } from "../../../utils/handleFormatCurrency";


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
                borderRadius="5" 
                borderColor="gray.200"
            >
                <Image source={{ uri: previewImage }} height={200} mb={2} alt="Imagem do Produto" />
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                    {name}
                </Text>
                <Text fontSize="sm" mb={2}>
                    Disponíveis: {quantity}
                </Text>
                <Text fontSize="md">
                    {handleFormatCurrency(value)}
                </Text>
            </Box>
        </Container>
    );
};