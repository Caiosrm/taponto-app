import { Box, FormControl, Input, Button, VStack, Text,  Image, ScrollView } from "native-base";
import React, { useState } from "react";
import { ICadastroScreenProps } from "./types";
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../../assets/logo/logo2.png'
import { auth } from "../../../api/config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TouchableOpacity } from "react-native";


const CadastroScreen = (props: ICadastroScreenProps) => {
    const navigation = useNavigation();

    const [nomeCompleto, setnomeCompleto] = React.useState<string>('')
    const [telefone, setTelefone] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [senha, setSenha] = React.useState<string>('')
    const [confirmarSenha, setconfirmarSenha] = React.useState<string>('')

    
    async function realizarCadastro() {
        


        await createUserWithEmailAndPassword(auth, email, senha)
            .then((dadosdousuario) => {
                console.log(dadosdousuario)
                return "sucesso"
            })
            .catch((error) => {
                console.log(error)
            });
        setEmail('')
        setSenha('')
        setconfirmarSenha('')
        setnomeCompleto('')
        setTelefone('')
        
        
    }
    const handleLogin = () => {
        navigation.navigate('Login');
    };


    return (
        <ScrollView>

        <VStack flex={1} alignItems='center' p={5}>
            <Image mt={5} size='xl' source={Logo} alt='logo tá pronto' />

            <Text fontSize='2xl'
                fontWeight='bold'
                textAlign='center'
                mt={5}
            >Faça seu cadastro para continuar</Text>
            <Box>
                <FormControl mt={3}>
                    <FormControl.Label>Nome Completo</FormControl.Label>
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'
                        value={nomeCompleto} 
                        onChangeText={setnomeCompleto} 
                        w={{ base: "100%" }}
                        placeholder="Digite seu nome completo" />
                </FormControl>

                <FormControl mt={3} >
                    <FormControl.Label>Celular</FormControl.Label>
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'
                        w={{ base: "100%" }}
                        placeholder="Digite com ddd"
                        value={telefone} 
                        onChangeText={setTelefone}  />
                </FormControl>

                <FormControl mt={3}>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'
                        w={{ base: "100%" }}
                        placeholder="Preencha com seu email"
                        value={email} 
                        onChangeText={setEmail} />
                </FormControl>

                <FormControl mt={3} >
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'
                        w={{ base: "100%" }}
                        placeholder="Senha"
                        value={senha} 
                        onChangeText={setSenha} />
                </FormControl>

                <FormControl mt={3} >
                    <FormControl.Label>Confirmar senha</FormControl.Label>
                    <Input
                        borderRadius='lg'
                        borderColor='primary.900'
                        w={{ base: "100%" }}
                        placeholder="Confirme sua senha"
                        value={confirmarSenha} 
                        onChangeText={setconfirmarSenha} />
                </FormControl>

                <Box mt={3}>

                    <Button onPress={realizarCadastro} mt={5} bg='primary.900'>Cadastrar</Button>
                </Box>
                

                <Box justifyContent='center' alignItems='center' mt={5} flexDirection='row'>
                    <Text textAlign='center'>Já tem uma conta? </Text>
                    <TouchableOpacity onPress={handleLogin}><Text>Faça seu login</Text></TouchableOpacity>
                </Box>

            </Box>
        </VStack>
        </ScrollView>

    );
};

export default CadastroScreen;

