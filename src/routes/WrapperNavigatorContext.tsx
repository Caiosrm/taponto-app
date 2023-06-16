import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CustomerTabsNavigator from './navigation/CustomerTabsNavigator';
import ShopTabsNavigator from './navigation/ShopTabsNavigator';
import { ClienteContext } from '../contexts/ClienteContext';
import { CantinaContext } from '../contexts/CantinaContext';
import { CadastroClienteScreen } from '../components/Screen/Cliente/CadastroClienteScreen';
import { useCantinaLogada, useClienteLogado } from '../contexts/AuthContext';
import { CadastroCantinaScreen } from '../components/Screen/Cantina/CadastroCantinaScreen';

const Stack = createStackNavigator();


export const WrapperNavigation = () => {
  const clienteLogado = useClienteLogado(); // Retorna true se o cliente estiver logado
  const cantinaLogada = useCantinaLogada(); // Retorna true se a cantina estiver logada

  return (
    <Stack.Navigator>
      {cantinaLogada ? (
        <Stack.Screen
          name="ShopTabsNavigator"
          component={ShopTabsNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="CadastroCantinaScreen"
          component={CadastroCantinaScreen}
          options={{ headerShown: false }}
        />
      )}

      {clienteLogado ? (
        <Stack.Screen
          name="CustomerTabsNavigator"
          component={CustomerTabsNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="CadastroClienteScreen"
          component={CadastroClienteScreen}
          options={{ headerShown: false }}
        />
      )}

    </Stack.Navigator>
  );
}