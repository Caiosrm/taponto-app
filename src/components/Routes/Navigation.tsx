import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import Home from '../Screen/Home';
import Cardapio from '../Screen/Cardapio';
import Carteira from '../Screen/Carteira';
import Perfil from '../Screen/Perfil';
import Sacola from '../Screen/Sacola';
import ConfigPerfil from '../Screen/Painel';
import theme from '../../themes/Theme';
import { ColorMode, NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './types';
import Login from '../Screen/Login';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  const [mode, setMode] = useState<ColorMode>('light');
  const colorModeManager = {
    get: () => Promise.resolve(mode),
    set: (value: ColorMode) => setMode(value),
  };

  return (
    <NativeBaseProvider theme={theme} >
      <Tab.Navigator screenOptions={{ tabBarStyle: { position: 'absolute', backgroundColor: '#fff', height: 60 } }}>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) { return <Ionicons name='home' size={size} color={color} /> }
            else return (<Ionicons name='home-outline' size={size} color={color} />);
          }
        }} />

        <Tab.Screen name="Cardapio" component={Cardapio} options={{
          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) { return <Ionicons name='reader' size={size} color={color} /> }
            else return (<Ionicons name='reader' size={size} color={color} />);
          }
        }} />

        <Tab.Screen name="Sacola" component={Sacola} options={{
          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) { return <Entypo name='shopping-bag' size={size} color={color} /> }
            else return (<Entypo name='shopping-bag' size={size} color={color} />);
          }
        }} />

        <Tab.Screen name="Perfil" component={Perfil} options={{
          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) { return <Ionicons name='person-circle-sharp' size={size} color={color} /> }
            else return (<Ionicons name='person-circle-sharp' size={size} color={color} />);
          }
        }} />

        <Tab.Screen name="Login" component={Login} options={{
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