import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { NativeBaseProvider } from 'native-base';

import { RootStackParamList } from './types';
import { ThemeProvider } from '../themes/ThemeContext';
import Home from '../components/Screen/Home';
import Perfil from '../components/Screen/Perfil';
import Sacola from '../components/Screen/Sacola';
import PedidosScreen from '../components/Screen/Pedidos';
import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cardapio/ListarCardapio';
import PerfilScreen from '../components/Screen/Perfil';
import { initialStateSacola } from '../components/Screen/Sacola/types';
import { initialStateHome } from '../components/Screen/Home/types';
import { initialStatePerfil } from '../components/Screen/Perfil/types';
import { initialStateLogin } from '../components/Screen/Login/types';
import { initialStateProduto } from '../components/Screen/Cardapio/types';
import ItemDetalhado from '../components/Screen/Cardapio/ItemDetalhado';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function AppNavigator() {

  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <Tab.Navigator initialRouteName='ListarCardapio' screenOptions={{ tabBarStyle: { position: 'absolute', backgroundColor: '#fff', height: 60 } }}>

          <Tab.Screen name="Home"
            component={Home}
            initialParams={initialStateHome}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='home' size={size} color={color} /> }
                else return (<Ionicons name='home-outline' size={size} color={color} />);
              }
            }} />

          <Tab.Screen name="Sacola"
            component={Sacola}
            initialParams={initialStateSacola}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Entypo name='shopping-bag' size={size} color={color} /> }
                else return (<Entypo name='shopping-bag' size={size} color={color} />);
              },
            }}
          />

          <Tab.Screen name="Perfil"
            component={Perfil}
            initialParams={initialStatePerfil}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='person-circle-sharp' size={size} color={color} /> }
                else return (<Ionicons name='person-circle-sharp' size={size} color={color} />);
              },
            }}
          />

          <Tab.Screen name="Login"
            component={Login}
            initialParams={initialStateLogin}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='person' size={size} color={color} /> }
                else return (<Ionicons name='person' size={size} color={color} />);
              }
            }}
          />

          <Tab.Screen name="Pedidos"
            component={() => <PedidosScreen
              // props 
              pageTitle="Pedidos" produto={initialStateProduto} produtos={[]} />
            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Octicons name='checklist' size={size} color={color} /> }
                else return (<Octicons name='checklist' size={size} color={color} />);
              }
            }}
          />

          <Stack.Screen
          
            name="ListarCardapio"
            component={() => <ItemDetalhado
              // props 
              pageTitle="Cardapio"
              
              idProduto={''}
              produto={initialStateProduto}
              idProdutos={''}
              produtos={[]}
            />}
          />

        </Tab.Navigator>






      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export default AppNavigator;