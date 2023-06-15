import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../components/Screen/LoginScreen';
import ListarCardapio from '../components/Screen/Cantina/ListarCardapio';

import CadastroScreen from '../components/Screen/CadastroScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CustomerTabsNavigator from './navigation/CustomerTabsNavigator';
import { PerfilScreen } from '../components/Screen/Cliente/PerfilScreen';
import SacolaScreen from '../components/Screen/Cliente/SacolaScreen';
import { initialStatePerfil } from '../components/Screen/Perfil/types';
import { ManterProdutosScreen } from '../components/Screen/Cantina/ManterProdutosScreen';
import ShopTabsNavigator from './navigation/ShopTabsNavigator';
import PedidosScreen from '../components/Screen/Cliente/PedidosClienteScreen';


const Stack = createStackNavigator();

/*===================================================================================================*/
/* Pilha de rotas da aplicação (Wrapper)
/*===================================================================================================*/
export const WrapperNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='ShopTabsNavigator'>
      {/*==========================TABS==============================================================*/}
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ShopTabsNavigator" component={ShopTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerTabsNavigator" component={CustomerTabsNavigator} options={{ headerShown: false }} />
      {/*==========================SCREENS===========================================================*/}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PerfilSccren" component={PerfilScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PedidosScreen" component={PedidosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SacolaScreen" component={SacolaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ManterProdutosScreen" component={ManterProdutosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ListarCardapio" component={ListarCardapio} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}