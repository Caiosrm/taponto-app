import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Login from "../../components/Screen/Login";
import Pedidos from "../../components/Screen/Pedidos";
import Sacola from "../../components/Screen/Sacola";
import { initialStateSacola } from "../../components/Screen/Sacola/types";
import CadastroProdutoScreen from "../../components/Screen/PainelCantina/CadastroProdutoScreen";
import { PerfilScreen } from "../../components/Screen/Perfil";


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
  
            <Tab.Screen name="Sacola" component={Sacola}
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
  
            <Tab.Screen name="Perfil" component={PerfilScreen}
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

<Tab.Screen name="Cadastrar Produto"
              component={CadastroProdutoScreen}
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