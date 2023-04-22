import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import Home from '../components/Screen/Home';
import Cardapio from '../components/Screen/Cardapio';
import Perfil from '../components/Screen/Perfil';
import Sacola from '../components/Screen/Sacola';
import theme from '../themes/Theme';
import { ColorMode, NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './types';
import Login from '../components/Screen/Login';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function AppNavigator() {

  //================================================================
  //STATES
  //================================================================
  const [mode, setMode] = useState<ColorMode>('light');


  const colorModeManager = {
    get: () => Promise.resolve(mode),
    set: (value: ColorMode) => setMode(value),
  };


  return (
    <NativeBaseProvider theme={theme} >
      <Tab.Navigator screenOptions={{ tabBarStyle: { position: 'absolute', backgroundColor: '#fff', height: 60 } }}>
        <Tab.Screen name="Home"
          component={() => <Home pageTitle="Home" />} options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='home' size={size} color={color} /> }
              else return (<Ionicons name='home-outline' size={size} color={color} />);
            }
          }} />

        <Tab.Screen name="Cardapio"
          component={() => <Cardapio pageTitle="Cardapio" />}
          options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='reader' size={size} color={color} /> }
              else return (<Ionicons name='reader' size={size} color={color} />);
            },
          }} />

        <Tab.Screen name="Sacola"
          component={() => <Sacola pageTitle="Sacola" />} options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Entypo name='shopping-bag' size={size} color={color} /> }
              else return (<Entypo name='shopping-bag' size={size} color={color} />);
            },
          }} />

        <Tab.Screen name="Perfil"
          component={() => <Perfil pageTitle="Perfil" />} options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='person-circle-sharp' size={size} color={color} /> }
              else return (<Ionicons name='person-circle-sharp' size={size} color={color} />);
            }
          }} initialParams={{ pageTitle: 'perfil' }} />

        <Tab.Screen name="Login"
          component={() => <Login pageTitle="Login" />} options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='person' size={size} color={color} /> }
              else return (<Ionicons name='person' size={size} color={color} />);
            }
          }} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}

export default AppNavigator;