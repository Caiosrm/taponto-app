import { Box, FormControl, Input, Button, VStack, Text, Image, ScrollView } from "native-base";
import React, { useContext, useEffect } from "react";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Logo from '../../../../assets/logo/logo2.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../api/config/firebaseConfig";
import { RootStackParamList } from "../../../routes/types";
import { TouchableOpacity } from "react-native";
import { ClienteContext } from "../../../contexts/ClienteContext";
import { ClienteType } from "../../../api/types/UserType";
import { ErrorBadge } from "../../Common/ErrorBadge";
import { CantinaContext } from "../../../contexts/CantinaContext";


export const CadastroClienteScreen: React.FC = () => {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const { cliente, atualizarCliente } = useContext(ClienteContext);
    const shop = useContext(CantinaContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [nomeCompleto, setnomeCompleto] = React.useState<string>();
    const [telefone, setTelefone] = React.useState<string>();
    const [email, setEmail] = React.useState<string>('');
    const [senha, setSenha] = React.useState<string>('');
    const [confirmarSenha, setconfirmarSenha] = React.useState<string>('');

    async function cadastrarCliente() {

        if (senha !== confirmarSenha) {
            console.log("Senhas não coincidem!");
            return (<ErrorBadge />);
        }

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

        console.log("Cadastro realizado com sucesso!");
    };

    /*===================================================================================================*/
    /* handleChange's
    /*===================================================================================================*/
    const handleLogin = () => {
        navigation.navigate('LoginClienteScreen');
    };

    const handleUpdateAttribute = (attribute: keyof ClienteType, value: any) => {
        if (!cliente) return;
        const novoCliente = { ...cliente, [attribute]: value };
        atualizarCliente(novoCliente);
    };

    /*===================================================================================================*/
    /* useEffect's
    /*===================================================================================================*/
    useEffect(() => { //USE EFFECT INICIAL
        console.log("CLIENTE: ", cliente)
    }, [cliente]);



    return (
        <ScrollView>

            <VStack flex={1} alignItems='center' p={5}>
                <Image mt={5} size='xl' source={Logo} alt='logo tá pronto' />
                <Text fontSize='2xl'
                    fontWeight='bold'
                    textAlign='center'
                    mt={5}
                >
                    Faça seu cadastro para continuar
                </Text>
                <Box>
                    <FormControl mt={3}>
                        <FormControl.Label>
                            Nome Completo
                        </FormControl.Label>
                        <Input
                            value={nomeCompleto}
                            borderRadius='lg'
                            borderColor='primary.900'
                            onChangeText={() => handleUpdateAttribute}
                            w={{ base: "100%" }}
                            placeholder="Digite seu nome completo" />
                    </FormControl>

                    <FormControl mt={3} >
                        <FormControl.Label>
                            Celular
                        </FormControl.Label>
                        <Input
                            value={telefone}
                            borderRadius='lg'
                            borderColor='primary.900'
                            w={{ base: "100%" }}
                            placeholder="Digite com ddd"
                            onChangeText={() => handleUpdateAttribute}
                        />
                    </FormControl>

                    <FormControl mt={3}>
                        <FormControl.Label>
                            Email
                        </FormControl.Label>
                        <Input
                            value={email}
                            borderRadius='lg'
                            borderColor='primary.900'
                            w={{ base: "100%" }}
                            placeholder="Preencha com seu email"
                            onChangeText={() => handleUpdateAttribute}
                        />
                    </FormControl>

                    <FormControl mt={3} >
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            borderRadius='lg'
                            type='password'
                            borderColor='primary.900'
                            w={{ base: "100%" }}
                            placeholder="Senha"
                            value={senha}
                            onChangeText={() => handleUpdateAttribute} />
                    </FormControl>

                    <FormControl mt={3} >
                        <FormControl.Label>Confirmar senha</FormControl.Label>
                        <Input
                            borderRadius='lg'
                            type='password'
                            borderColor='primary.900'
                            w={{ base: "100%" }}
                            placeholder="Confirme sua senha"
                            value={confirmarSenha}
                        />
                    </FormControl>

                    <Box mt={3}>
                        <Button
                            onPress={cadastrarCliente}
                            mt={5}
                            bg='primary.900'
                        >
                            Cadastrar
                        </Button>
                    </Box>

                    <Box
                        justifyContent='center'
                        alignItems='center'
                        mt={5}
                        flexDirection='row'
                    >
                        <Text textAlign='center'>
                            Já tem uma conta?
                        </Text>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text>
                                Faça seu login
                            </Text>
                        </TouchableOpacity>
                    </Box>

                </Box>
            </VStack>
        </ScrollView>

    );
};