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
import { LoginCantinaScreen } from '../components/Screen/Cantina/LoginCantinaScreen';

const Stack = createStackNavigator();



export const WrapperNavigation = ({ isCliente }: { isCliente: boolean }) => {
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
    <Stack.Navigator initialRouteName='CadastroClienteScreen'>
      {renderizarRota()}
    </Stack.Navigator>
  );
};
