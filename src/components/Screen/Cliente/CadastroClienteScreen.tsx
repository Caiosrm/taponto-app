import { Box, FormControl, Input, Button, VStack, Text, Image, ScrollView } from "native-base";
import React, { useContext, useEffect } from "react";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Logo from '../../../../assets/logo/logo2.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../api/config/firebaseConfig";
import { RootStackParamList } from "../../../routes/types";
import { TouchableOpacity } from "react-native";
import { ClienteContext } from "../../../contexts/ClienteContext";
import { ClienteType, initialStateCliente } from "../../../api/types/UserType";
import { ErrorBadge } from "../../Common/ErrorBadge";
import { CantinaContext } from "../../../contexts/CantinaContext";
import { CampusType, initialStateCampus } from "../../../api/types/CampusType";
import { colors } from "../../../themes/Theme";


export const CadastroClienteScreen: React.FC = () => {
    /*===================================================================================================*/
    /* state's
    /*===================================================================================================*/
    const { cliente, atualizarCliente } = useContext(ClienteContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [confirmarSenha, setconfirmarSenha] = React.useState<string>('');

    const cadastrarCliente = async () => {
        if (cliente.senha !== confirmarSenha) {
            console.log("Senhas não coincidem!");
            return (<ErrorBadge />);
        }


        // Atualize o estado do cliente com os dados do novo cliente
        await createUserWithEmailAndPassword(auth, cliente.email, cliente.senha)
            .then((response) => {
                console.log(response);
                if (response) {
                    atualizarCliente({
                        ...cliente,
                        id: response.user.uid,
                        nome: cliente.nome,
                        matricula: cliente.matricula,
                        polo: cliente.polo,
                        senha: cliente.senha,
                        email: cliente.email,
                        celular: cliente.celular
                    })
                }
                return "sucesso";
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("Cadastro realizado com sucesso!");

    }
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
                            value={cliente.nome}
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
                            value={cliente.celular}
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
                            value={cliente.email}
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
                            value={cliente.senha}
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
                        <Text textAlign='center'>Já tem uma conta?</Text>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text color="#002060"> Faça seu login </Text>
                        </TouchableOpacity>
                    </Box>

                </Box>
            </VStack>
        </ScrollView>

    );
};