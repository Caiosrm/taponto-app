import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Screen/Home';
import Cardapio from './src/components/Screen/Cardapio';
import Carteira from './src/components/Screen/Carteira';
import Perfil from './src/components/Screen/Perfil';
import Sacola from './src/components/Screen/Sacola';
import ConfigPerfil from './src/components/Screen/ConfigPerfil';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Carteira" component={Carteira} />
        <Stack.Screen name="Sacola" component={Sacola} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configurações" component={ConfigPerfil} />
      </Stack.Navigator>
    </Stack.Navigator>
  );
}

export default AppNavigator;