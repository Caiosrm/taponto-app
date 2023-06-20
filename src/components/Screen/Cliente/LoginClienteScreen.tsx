import React, { useContext, useState } from 'react'
import { Text, Image, View, VStack, FormControl, Box, Input, Icon, Button } from 'native-base'
import { TouchableOpacity, Alert } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ImageWelcome from '../../../../assets/Welcome.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack';
import { FirebaseError } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import Logo from '../../../../assets/logo/logo2.png'
import AppBar from '../../Common/TopBar'
import { auth } from '../../../api/config/firebaseConfig';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../routes/types';
import { CantinaContext } from '../../../contexts/CantinaContext';
import { ClienteContext } from '../../../contexts/ClienteContext';


type ILoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'LoginClienteScreen'>;
};

export default function LoginScreen(props: ILoginScreenProps) {
    const user = useContext(ClienteContext);
    const shop = useContext(CantinaContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logar() {
        try {
            const dadosdousuario = await signInWithEmailAndPassword(auth, email, senha);
            console.log(dadosdousuario);
            props.navigation.navigate('CustomerTabsNavigator');
        } catch (error) {
            console.log(error);
            // Trate o erro de autenticação aqui
            if ((error as FirebaseError).code === 'auth/wrong-password') {
                Alert.alert('Senha incorreta');
            } else if ((error as FirebaseError).code === 'auth/user-not-found') {
                alert('Email não existe');
            } else {
                Alert.alert('Preencha os campos');
            }
        }

        setEmail('');
        setSenha('');
    }
    const handleCadastro = () => {
        props.navigation.navigate('CadastroClienteScreen');
    };

    const handleLoginCantina = () => {
        props.navigation.navigate('LoginCantinaScreen');

    }

    return (
        <VStack justifyContent='center' flex={1} alignItems='center' p={5}>
            <Image mt={1} size='xl' source={Logo} alt='logo tá pronto' />
            <Text fontSize='2xl'
                fontWeight='bold'
                textAlign='center'
                color='#002060'
                mt={5}
            >Faça login em sua conta</Text>
            <Box>
                <FormControl mt={3}>
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
                        onChangeText={setEmail} />
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
                        placeholder="Senha" />
                </FormControl>



                <Box mt={3}>

                    <Text color='#002060'>Esqueceu sua senha?</Text>
                    <Box justifyContent='center' alignItems='center' mt={5} flexDirection='row'>
                        <Text color='#000000' textAlign='center'>Não tem conta?</Text>
                        <TouchableOpacity onPress={handleCadastro}>
                            <Text color='#002060'> Cadastre-se </Text>
                        </TouchableOpacity>
                    </Box>

                </Box>
                <Button borderRadius={10} onPress={logar} mt={5} bg='#0094D3'>Entrar</Button>


            </Box>

            <Box flexDirection='row' mt={'60px'}>
                <Text>Cantina?</Text>
                <Text color='#002060' onPress={handleLoginCantina}> Faça login </Text>
            </Box>


        </VStack>
    )
}
