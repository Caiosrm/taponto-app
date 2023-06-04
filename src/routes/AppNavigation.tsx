import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Perfil from '../components/Screen/Perfil';
import Sacola from '../components/Screen/Sacola';
import Login from '../components/Screen/Login';
import ListarCardapio from '../components/Screen/Cantina/ListarCardapio';
import { initialStatePerfil } from '../components/Screen/Perfil/types';
import Pedidos from '../components/Screen/Pedidos';
import ItemDetalhado from '../components/Screen/Cantina/ItemDetalhado';
import HomeScreen from '../components/Screen/Home';
import CantinaScreen from '../components/Screen/Cantina';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


/*===================================================================================================*/
/* Rotas fora da Barra de Navegação
/*===================================================================================================*/
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ListarCardapio" component={ListarCardapio} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetalhado" component={ItemDetalhado} options={{ headerShown: false }} />
      <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="CantinaScreen" component={CantinaScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

/*===================================================================================================*/
/* Rotas da Barra de Navegação
/*===================================================================================================*/
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

          <Tab.Screen name="Sacola"
            component={() => <Sacola
              idCliente={''}
              produtosNaSacola={[]}
              valorTotal={0} />}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <Entypo name='shopping-bag' size={size} color={color} />
                } else {
                  return <Entypo name='shopping-bag' size={size} color={color} />
                }
              },
            }}
          />

          <Tab.Screen name="Perfil"
            component={Perfil}
            initialParams={initialStatePerfil}
            options={{
              headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <Ionicons name='person-circle-sharp' size={size} color={color} />
                } else {
                  return <Ionicons name='person-circle-sharp' size={size} color={color} />
                }
              },
            }}
          />

          <Tab.Screen name="Pedidos"
            component={Pedidos}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <Octicons name='checklist' size={size} color={color} />;
                } else {
                  return <Octicons name='checklist' size={size} color={color} />;
                }
              }
            }}
          />

        </Tab.Group>
      ) : (
        <Tab.Group>

          <Tab.Screen name="Login"
            component={Login}
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