import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cantina/ListarCardapio';
import Pedidos from '../components/Screen/Pedidos';

import CadastroScreen from '../components/Screen/Cadastro';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CustomerTabsNavigator from './navigation/CustomerTabsNavigator';
import { PerfilScreen } from '../components/Screen/Perfil';
import SacolaScreen from '../components/Screen/Sacola';
import { initialStatePerfil } from '../components/Screen/Perfil/types';
import { ManterProdutosScreen } from '../components/Screen/PainelCantina/ManterProdutosScreen';
import { initialStateSacola } from '../components/Screen/Sacola/types';
import ShopTabsNavigator from './navigation/ShopTabsNavigator';


const Stack = createStackNavigator();

/*===================================================================================================*/
/* Pilha de rotas da aplicação (Wrapper)
/*===================================================================================================*/
export const WrapperNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='CustomerTabsNavigator'>
      {/*==========================TABS==============================================================*/}
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ShopTabsNavigator" component={ShopTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerTabsNavigator" component={CustomerTabsNavigator} options={{ headerShown: false }} />
      {/*==========================SCREENS===========================================================*/}
      <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Sacola" component={SacolaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ManterProdutosScreen" component={ManterProdutosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ListarCardapio" component={ListarCardapio} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}