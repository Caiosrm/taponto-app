import { Box, FormControl, Input, Button } from "native-base";
import React, { useState } from "react";
import { ICadastroScreenProps } from "./types";
import { auth } from "../../../api/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const CadastroScreen = (props: ICadastroScreenProps) => {

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
        alert('Usuário cadastrado com sucesso')


    }


    return (

        <Box padding={5}>
            <FormControl>
                <FormControl.Label>Email</FormControl.Label>

                <Input placeholder='Insira o email do estudante'
                    size="lg"
                    w="100%"
                    value={email}
                    onChangeText={texto => setEmail(texto)}
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3} />

                <FormControl.Label>
                    Email
                </FormControl.Label>
                <Input
                    placeholder='Insira o email do estudante'
                    size="lg"
                    w="100%"
                    value={email}
                    onChangeText={texto => setEmail(texto)}
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3} />
            </FormControl>

            <FormControl>
                <FormControl.Label>Senha</FormControl.Label>

                <Input placeholder='Crie sua senha com 6 caracteres'
                    type="password"
                    size="lg"
                    w="100%"
                    value={senha}
                    onChangeText={texto => setSenha(texto)}
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3} />

            </FormControl>
            <FormControl>
                <FormControl.Label>Confirmar senha</FormControl.Label>

                <Input placeholder='Confirme sua senha'
                    type="password"
                    size="lg"
                    w="100%"
                    value={confirmarSenha}
                    onChangeText={texto => setconfirmarSenha(texto)}
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3} />

                <FormControl>
                    <FormControl.Label>
                        Confirmar senha
                    </FormControl.Label>
                    <Input
                        placeholder='Confirme sua senha'
                        size="lg"
                        w="100%"
                        value={confirmarSenha}
                        onChangeText={texto => setconfirmarSenha(texto)}
                        borderRadius="lg"
                        bgColor="gray.100"
                        shadow={3} />
                </FormControl>
            </FormControl>




            <Button borderRadius={'lg'} mt={10} onPress={() => realizarCadastro()}>Cadastrar</Button>
        </Box>



    );
};

export default CadastroScreen;

