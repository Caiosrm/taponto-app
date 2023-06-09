import React, { useState } from 'react'
import { Text, Image, View, VStack, FormControl, Box, Input, Icon, Button } from 'native-base'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack';
import { FirebaseError } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import Logo from '../../../../assets/logo/logo2.png'
import AppBar from '../../Common/TopBar'
import { auth } from '../../../api/config/firebaseConfig';
import { MaterialIcons } from '@expo/vector-icons';

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
    const navigation = useNavigation();
   
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    async function logar() {
        try {
            const dadosdousuario = await signInWithEmailAndPassword(auth, email, senha);
            console.log(dadosdousuario);
            props.navigation.navigate('Home');
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
        navigation.navigate('Cadastro');
    };


    return (
        <VStack justifyContent='center' flex={1} alignItems='center' p={5}>
            <Image mt={5} size='xl' source={Logo} alt='logo tá pronto' />
            <Text fontSize='2xl'
                fontWeight='bold'
                textAlign='center'
                mt={5}
            >Faça login em sua conta</Text>
            <Box>
                <FormControl mt={3}>
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'

                        w={{ base: "100%" }}
                        InputLeftElement=
                        {<Icon as={<MaterialIcons name="email" />}
                            size={5}
                            ml="2"
                            color="primary.900"
                        />}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail} />
                </FormControl>

                <FormControl mt={3} >
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'
                        type='password'
                        w={{ base: "100%" }}
                        InputLeftElement=
                        {<Icon as={<MaterialIcons name="lock-outline" />}
                            size={5}
                            ml="2"
                            color="primary.900"
                        />}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Senha" />
                </FormControl>

                <Box mt={3}>
                    <Text>Esqueceu sua senha?</Text>
                    <Button onPress={logar} mt={5} bg='primary.900'>Entrar</Button>

                </Box>


                <Box justifyContent='center' alignItems='center' mt={5} flexDirection='row'>
                    <Text textAlign='center'>Não tem conta? </Text>
                    <TouchableOpacity onPress={handleCadastro}><Text>Cadastre-se</Text></TouchableOpacity>
                </Box>

            </Box>


        </VStack>
    )
}
