import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { RootStackParamList } from './types';
import Home from '../components/Screen/Home';
import Perfil from '../components/Screen/Perfil';
import Sacola from '../components/Screen/Sacola';
import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cardapio/ListarCardapio';
import { initialStateSacola } from '../components/Screen/Sacola/types';
import { initialStateHome } from '../components/Screen/Home/types';
import { initialStatePerfil } from '../components/Screen/Perfil/types';
import { initialStateLogin } from '../components/Screen/Login/types';
import { initialStateProduto } from '../components/Screen/Cardapio/types';
import Pedidos from '../components/Screen/Pedidos';
import ItemDetalhado from '../components/Screen/Cardapio/ItemDetalhado';
import HomeScreen from '../components/Screen/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ListarCardapio" component={ListarCardapio} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetalhado" component={ItemDetalhado} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


export const TabNavigator = () => {
  const [usuarioLogado, setUsuarioLogado] = React.useState<boolean>(true);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          height: 60
        }
      }}>

      {usuarioLogado === true ? (

        <Tab.Group>

          <Tab.Screen
            name="Sacola"
            component={Sacola}
            initialParams={initialStateSacola}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Entypo name='shopping-bag' size={size} color={color} /> }
                else return (<Entypo name='shopping-bag' size={size} color={color} />);
              },
            }}
          />

          <Tab.Screen
            name="Perfil"
            component={Perfil}
            initialParams={initialStatePerfil}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='person-circle-sharp' size={size} color={color} /> }
                else return (<Ionicons name='person-circle-sharp' size={size} color={color} />);
              },
            }}
          />
          <Tab.Screen name="Pedidos"
            component={() => <Pedidos
              // props 
              pageTitle="Pedidos"
              produto={initialStateProduto}
              produtos={[]} />
            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Octicons name='checklist' size={size} color={color} /> }
                else return (<Octicons name='checklist' size={size} color={color} />);
              }
            }}
          />
        </Tab.Group>
      ) : (
        <Tab.Group>
          <Tab.Screen name="Login" component={Login} initialParams={initialStateLogin}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='person' size={size} color={color} /> }
                else return (<Ionicons name='person' size={size} color={color} />);
              }
            }}
          />
      </Tab.Group>
      )}
        </Tab.Navigator>
  );
}

export default TabNavigator;