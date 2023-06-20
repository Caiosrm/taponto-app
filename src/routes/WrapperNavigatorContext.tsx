import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CustomerTabsNavigator from './navigation/CustomerTabsNavigator';
import ShopTabsNavigator from './navigation/ShopTabsNavigator';
import { ClienteContext } from '../contexts/ClienteContext';
import { CantinaContext } from '../contexts/CantinaContext';
import { CadastroClienteScreen } from '../components/Screen/Cliente/CadastroClienteScreen';
import { useCantinaLogada, useClienteLogado } from '../contexts/AuthContext';
import { CadastroCantinaScreen } from '../components/Screen/Cantina/CadastroCantinaScreen';
import LoginClienteScreen from '../components/Screen/Cliente/LoginClienteScreen';
import LoginCantinaScreen from '../components/Screen/Cantina/LoginCantinaScreen';
import ListarCardapio from '../components/Screen/Cliente/ListarCardapio';
import CadastroProdutoScreen from '../components/Screen/Cantina/CadastroProdutoScreen';
import SacolaScreen from '../components/Screen/Cliente/SacolaScreen';

const Stack = createStackNavigator();



export const WrapperNavigation = ({ isCliente }: { isCliente: boolean, isLogado: boolean }) => {
  const clienteLogado = useClienteLogado();
  const cantinaLogada = useCantinaLogada();

  const renderizarRota = () => {

    if (isCliente) {
      if (clienteLogado) {
        return (
          <Stack.Screen
            name="CustomerTabsNavigator"
            component={CustomerTabsNavigator}
            options={{ headerShown: false }}
          />
        );
      } else {
        return (
          <Stack.Screen
            name="LoginClienteScreen"
            component={LoginClienteScreen}
            options={{ headerShown: false }}
          />
        );
      }
    }

    if (!isCliente) {
      if (cantinaLogada) {
        return (
          <Stack.Screen
            name="ShopTabsNavigator"
            component={ShopTabsNavigator}
            options={{ headerShown: false }}
          />
        );
      } else {
        return (
          <Stack.Screen
            name="LoginCantinaScreen"
            component={LoginCantinaScreen}
            options={{ headerShown: false }}
          />
        );
      }
    }

  };

  return (
    <Stack.Navigator>
      {renderizarRota()}

      <Stack.Screen
        name="ShopTabsNavigator"
        component={ShopTabsNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CustomerTabsNavigator"
        component={CustomerTabsNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ListarCardapio"
        component={ListarCardapio}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='CadastroProdutoScreen'
        component={CadastroProdutoScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='CadastroCantinaScreen'
        component={CadastroCantinaScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='LoginClienteScreen'
        component={LoginClienteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CadastroClienteScreen'
        component={CadastroClienteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SacolaScreen'
        component={SacolaScreen}
        options={{ headerShown: false }}
      />



    </Stack.Navigator>
  );
};
