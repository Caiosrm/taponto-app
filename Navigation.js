import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>''
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen name="Carteira" component={Carteira} />
      <Stack.Screen name="Sacola" component={Sacola} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Configurações" component={Configuracoes} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
