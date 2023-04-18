import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screen/Home';
import Cardapio from '../Screen/Cardapio';
import Carteira from '../Screen/Carteira';
import Perfil from '../Screen/Perfil';
import Sacola from '../Screen/Sacola';
import ConfigPerfil from '../Screen/ConfigPerfil';
import theme from '../../themes/Theme';
import { NativeBaseConfigProvider } from 'native-base/lib/typescript/core/NativeBaseContext';
import { ColorMode, NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './types';
import Login from '../Screen/Login';


const Stack = createStackNavigator<RootStackParamList>();



function AppNavigator() {
  const [mode, setMode] = useState('light'); // Estado do modo de cor da aplicação
  const colorModeManager = {
    get: () => Promise.resolve(mode) as Promise<ColorMode>, // Retorna o modo de cor atual
    set: (value: string) => setMode(value), // Define o modo de cor atual
  };

  return (

    <NativeBaseProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Cardapio" component={Cardapio} options={{ headerShown: false}} />
          <Stack.Screen name="Carteira" component={Carteira} options={{headerShown: false}}/>
          <Stack.Screen name="Sacola" component={Sacola} options={{headerShown: false}}/>
          <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}/>
          <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}


export default AppNavigator;