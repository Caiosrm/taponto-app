import React, { useContext, useState } from 'react'
import { Text, Image, View, VStack, FormControl, Box, Input, Icon, Button } from 'native-base'
import { TouchableOpacity, Alert } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ImageWelcome from '../../../../assets/Welcome.png'
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



type ILoginCantinaScreen = {
    navigation: StackNavigationProp<RootStackParamList, 'ShopTabsNavigator'>;
};

export default function LoginScreen(props: ILoginCantinaScreen) {
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

    const handleCadastro = () => {
        props.navigation.navigate('CadastroCantinaScreen');
    };


    return (
        <VStack justifyContent='center' flex={1} alignItems='center' p={5}>
            <Image mt={5} size='xl' source={Logo} alt='logo tá pronto' />
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

                <Box justifyContent='center' alignItems='center' mt={5} flexDirection='row'>
                    <Text color='#002060' textAlign='center'>Não tem conta? </Text>
                    <TouchableOpacity onPress={handleCadastro}>
                        <Text>Cadastre-se</Text>
                    </TouchableOpacity>
                </Box>

                <Box alignSelf={'center'} mt={3}>
                    <Text color='#002060'>Esqueceu sua senha?</Text>
                    <Button borderRadius={10} onPress={logar} mt={5} bg='#0094D3'>Entrar</Button>
                </Box>




            </Box>
            <Box mt={3}>
                <Image source={ImageWelcome} alt='Imagem bem vindo' />
                <Button w='138px' borderRadius='10' bg='#0094D3' mt={3}>
                    Conectar
                </Button>
            </Box>
        </VStack>
    )
}
