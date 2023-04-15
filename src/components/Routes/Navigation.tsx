import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home';
import Cardapio from '../Screen/Cardapio';
import Carteira from '../Screen/Carteira';
import Perfil from '../Screen/Perfil';
import Sacola from '../Screen/Sacola';
import ConfigPerfil from '../Screen/ConfigPerfil';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Carteira" component={Carteira} />
        <Stack.Screen name="Sacola" component={Sacola} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;