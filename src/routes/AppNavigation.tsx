import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perfil from '../components/Screen/Perfil';
import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cantina/ListarCardapio';
import Pedidos from '../components/Screen/Pedidos';
import ItemDetalhado from '../components/Screen/Cantina/ItemDetalhado';
import CantinaScreen from '../components/Screen/Cantina';
import HomeTabsNavigator from './utils/HomeTabsNavigator';
import BottomTabNavigator from './utils/BottomTabNavigator';

const Stack = createStackNavigator();

/*===================================================================================================*/
/* Pilha de rotas da aplicação
/*===================================================================================================*/
export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ListarCardapio" component={ListarCardapio} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetalhado" component={ItemDetalhado} options={{ headerShown: false }} />
      <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="CantinaScreen" component={CantinaScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}