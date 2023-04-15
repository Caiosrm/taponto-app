import {VStack,  Text, Box, Input, Link, Button } from 'native-base'
import {TouchableOpacity} from 'react-native'



export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} >
      <Text>Logo aqui</Text>

      <Text>
        Faça login em sua conta
      </Text>
      <Box>
        <Input
          
          placeholder="Insira seu endereço de e-mail"
        />
        <Input
          
          placeholder="Insira sua senha"
        />
      </Box>
      <Button>Entrar</Button>

      <Link href='#' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
    
  );
}
