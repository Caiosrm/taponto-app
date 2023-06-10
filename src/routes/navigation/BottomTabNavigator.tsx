import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Login from "../../components/Screen/Login";
import Pedidos from "../../components/Screen/Pedidos";
import Perfil from "../../components/Screen/Perfil";
import Sacola from "../../components/Screen/Sacola";
import { initialStateSacola } from "../../components/Screen/Sacola/types";


const Tab = createBottomTabNavigator();

/*===================================================================================================*/
/* Pilha de rotas da Barra de Navegação Inferior
/*===================================================================================================*/
const BottomTabNavigator = () => {

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
  
            <Tab.Screen name="Sacola" component={() => <Sacola
              idCliente={initialStateSacola.idCliente}
              produtosNaSacola={initialStateSacola.produtosNaSacola}
              valorTotal={initialStateSacola.valorTotal} />}
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
  
            <Tab.Screen name="Perfil" component={() => <Perfil />}
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
              component={() => <Pedidos />}
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
  
  export default BottomTabNavigator;