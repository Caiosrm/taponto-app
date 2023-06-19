import { Container, Box, Text, Image } from "native-base";
import { ProductCardProps } from "./types";
import { handleFormatCurrency } from "../../../utils/handleFormatCurrency";


export const ProductCard: React.FC<ProductCardProps> = ({ name, quantity, value, previewImage, }) => {
    return (

            <Box
                bg="white"
                shadow={2}
                rounded="md"
                width={"full"}
                p={4}
                mt={4}
                flexDir={'row'}
                borderWidth={1}
                borderRadius="5"
                borderColor="gray.200"
            >
                <Image
                    source={{ uri: previewImage }}
                    width={200}
                    height={200}
                    alt="Imagem do Produto"
                    mb={2}
                />
                <Box width={'full'} p={4} mt={4}>
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
            </Box>
    );
};