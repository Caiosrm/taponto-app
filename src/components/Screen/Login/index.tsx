import { Button, Text, VStack, Image, Input, Box, Link, FormControl, Center, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from '../../../../assets/logo/Logotipo.png'
import { useNavigation } from '@react-navigation/native';
import AppBar from '../../Common/TopBar'
import { useState } from 'react'
import { auth } from "../../../api/config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Sacola: undefined;
    Perfil: undefined;
    Login: undefined;
    Cadastro: undefined;
    Pedidos: undefined;
    ListarCardapio: undefined;
};

type ILoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

export default function Login(props: ILoginScreenProps) {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    async function logar() {
        signInWithEmailAndPassword(auth, email, senha)
            .then((dadosdousuario) => {
                console.log(dadosdousuario);
                props.navigation.navigate('Home');
            })
            .catch((error) => {
                console.log(error);
            });
        setEmail('');
        setSenha('');
    }

    return (
        <View>
            <AppBar />
            <VStack flex={1} alignItems='center' p={5} justifyContent='center'>
                <Image source={Logo} alt="Logo" size='xl' resizeMode='contain' />
                <Text fontSize='2xl' fontWeight='bold' color='gray.500' mt={5}>
                    Faça login em sua conta
                </Text>
                <Box>
                    <FormControl mt={3}>
                        <FormControl.Label>
                            Email
                        </FormControl.Label>
                        <Input placeholder='Insira seu endereço de email'
                            size="lg"
                            w="100%"
                            value={email}
                            onChangeText={texto => setEmail(texto)}
                            borderRadius="lg"
                            bgColor="gray.100"
                            shadow={3} />
                    </FormControl>
                    <FormControl mt={3}>
                        <FormControl.Label>
                            Senha
                        </FormControl.Label>
                        <Input placeholder='Insira sua senha'
                            size="lg"
                            value={senha}
                            onChangeText={texto => setSenha(texto)}
                            w="100%"
                            borderRadius="lg"
                            bgColor="gray.100"
                            shadow={3}
                        />
                    </FormControl>
                </Box>
                <Button onPress={() => logar()} bg={'red.700'} w='100%' mt={10} borderRadius={'lg'}>
                    Entrar
                </Button>
                <Link href='#' mt={2}>
                    Esqueceu sua senha?
                </Link>
                <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
                    <Text>
                        Ainda não tem cadastro?
                    </Text>
                    <TouchableOpacity>
                        <Text color='blue.500'>
                            Faça seu cadastro!
                        </Text>
                    </TouchableOpacity>
                </Box>
            </VStack>
        </View>
    )
}