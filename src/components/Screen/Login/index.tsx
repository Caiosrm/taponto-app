import { View, Button, Text, VStack, Image, Input, Box, Link, FormControl, Center } from 'native-base'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import Logo from '../../Screen/Login/Logotipo.png'

export default function Login() {


    return (
        <VStack flex={1} alignItems='center' p={5} justifyContent='center'>
            <Image source={Logo} alt="Alternate Text" size='xl' resizeMode='contain' />
            <Text fontSize='2xl' fontWeight='bold' color='gray.500' mt={5}>
                Faça login em sua conta
            </Text>
            <Box>
                <FormControl mt={3}>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder='Insira seu endereço de email'
                        size="lg"
                        w="100%"
                        borderRadius="lg"
                        bgColor="gray.100"
                        shadow={3} />
                </FormControl>
                <FormControl mt={3}>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input placeholder='Insira sua senha'
                        size="lg"
                        w="100%"
                        borderRadius="lg"
                        bgColor="gray.100"
                        shadow={3}
                    />
                </FormControl>
            </Box>
            <Button bg={'red.700'} w='100%' mt={10} borderRadius={'lg'}>
                Entrar
            </Button>
            <Link href='#' mt={2}>
                Esqueceu sua senha?
            </Link>
            <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color='blue.500'>
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    )
}