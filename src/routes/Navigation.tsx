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
import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cardapio/ListarCardapio';
import PerfilScreen from '../components/Screen/Perfil';
import PedidosScreen from '../components/Screen/Pedidos';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <Tab.Navigator initialRouteName='Cardapio' screenOptions={{ tabBarStyle: { position: 'absolute', backgroundColor: '#fff', height: 60 } }}>
          <Tab.Screen name="Home"
            component={() => <Home
              // props 
              pageTitle="Home"
              cantina={{
                id: '',
                nome: ''
              }}
              cantinas={[]} />
            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='home' size={size} color={color} /> }
                else return (<Ionicons name='home-outline' size={size} color={color} />);
              }
            }} />

          <Tab.Screen name="Cardapio"
            component={() => <ListarCardapio
              // props 
              pageTitle="Cardapio"
              produto={{
                nome: '',
                lanchonete: '',
                valor: 0,
                descricao: '',
                tipoDeAlimento: '',
                calorias: 0,
                quantidade: 0,
                ingredientes: '',
                imagem: '',
                avaliacao: 0,
                review: ''
              }}
              produtos={[]} />
            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='reader' size={size} color={color} /> }
                else return (<Ionicons name='reader' size={size} color={color} />);
              },
            }} />

          <Tab.Screen name="Sacola"
            component={() => <Sacola
              // props 
              pageTitle="Sacola"
              produto={{
                nome: '',
                lanchonete: '',
                valor: 0,
                descricao: '',
                tipoDeAlimento: '',
                calorias: 0,
                quantidade: 0,
                ingredientes: '',
                imagem: '',
                avaliacao: 0,
                review: ''
              }}
              produtos={[]}
              produtosNaSacola={[]} />
            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Entypo name='shopping-bag' size={size} color={color} /> }
                else return (<Entypo name='shopping-bag' size={size} color={color} />);
              },
            }}
          />

          <Tab.Screen name="Perfil"
            component={() => <Perfil
              // props 
              pageTitle="Perfil" />
            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Ionicons name='person-circle-sharp' size={size} color={color} /> }
                else return (<Ionicons name='person-circle-sharp' size={size} color={color} />);
              }
            }} initialParams={{ pageTitle: 'perfil' }}
          />

          <Tab.Screen name="Login"
            component={() => <Login
              // props 
              pageTitle="Login" />
            }
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
              pageTitle="Pedidos" />

            }
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) { return <Octicons name='checklist' size={size} color={color} /> }
                else return (<Octicons name='checklist' size={size} color={color} />);
              }
            }}
          />

        </Tab.Navigator>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export default AppNavigator;