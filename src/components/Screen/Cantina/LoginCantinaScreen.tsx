import React, { useContext, useState } from 'react'
import { Text, Image, View, VStack, FormControl, Box, Input, Icon, Button } from 'native-base'
import { TouchableOpacity, Alert } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack';
import { FirebaseError } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '../../../api/config/firebaseConfig';
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';
import { RootStackParamList } from '../../../routes/types';
import Logo from '../../../../assets/logo/logo2.png'
import { colors } from '../../../themes/Theme';
import ImageLogin from '../../../../assets/Welcome.png';


type ILoginCantinaScreen = {
    navigation: StackNavigationProp<RootStackParamList, 'ShopTabsNavigator'>;
};

export default function LoginScreen(props: ILoginCantinaScreen) {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const user = useContext(ClienteContext);
    const shop = useContext(CantinaContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logar() {
        try {
            const response = await signInWithEmailAndPassword(auth, email, senha);
            console.log(response);
            props.navigation.navigate('ShopTabsNavigator');
        } catch (error) {
            console.log(error);
            // Trate o erro de autenticação aqui
            if ((error as FirebaseError).code === 'auth/wrong-password') {
                Alert.alert("Senha incorreta");
            } else if ((error as FirebaseError).code === 'auth/user-not-found') {
                alert('Email não existe');
            } else {
                Alert.alert('Preencha os campos');
            }
        }

        setEmail('');
        setSenha('');
    }

    const handleCadastroCantina = () => {
        props.navigation.navigate('CadastroCantinaScreen');
    };

    const handleLoginCliente = () => {
        props.navigation.navigate('LoginClienteScreen');

    }

    return (
        <VStack justifyContent='center' flex={1} alignItems='center' p={5}>
            <Image mt={1} size='xl' source={Logo} alt='logo tá pronto' />
            <Text fontSize='2xl'
                fontWeight='bold'
                textAlign='center'
                color='#002060'
                mt={5}
            >Faça o login de sua loja para continuar</Text>
            <Box>
                <FormControl mt={3} w={'full'}>
                    <Input
                        borderRadius='lg'
                        borderColor='#002060'
                        w={{ base: "100%" }}
                        InputLeftElement=
                        {<Icon as={<MaterialIcons name="email" />}
                            size={5}
                            ml="2"
                            color="#002060"
                        />}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </FormControl>

                <FormControl mt={3} >
                    <Input
                        borderRadius='lg'
                        borderColor='#002060'
                        type='password'
                        w={{ base: "100%" }}
                        InputLeftElement=
                        {<Icon as={<MaterialIcons name="lock-outline" />}
                            size={5}
                            ml="2"
                            color="#002060"
                        />}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Senha"
                    />
                </FormControl>
                <Text color='#002060'>
                    Esqueceu sua senha?
                </Text>
                <Box justifyContent='center' alignItems='center' mt={5} flexDirection='row'>
                    <Text color={colors.light.pretoPuro} textAlign='center'>Não tem conta?</Text>
                    <TouchableOpacity onPress={handleCadastroCantina}>
                        <Text color='#002060'> Cadastre-se </Text>
                    </TouchableOpacity>
                </Box>

                    <Button borderRadius={10} onPress={logar} mt={5} bg='#0094D3'>Entrar</Button>


            </Box>

            <Box flexDirection='row' mt={'60px'}>
                <Text>Cliente?</Text>
                <Text color='#002060' onPress={handleLoginCliente}> Faça login </Text>
            </Box>

        </VStack>
    )
}
