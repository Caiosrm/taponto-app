import { FontAwesome, Octicons, Ionicons, Entypo } from "@expo/vector-icons";
import HomeScreen from "../../components/Screen/Home";
import Pedidos from "../../components/Screen/Pedidos";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sacola from "../../components/Screen/Sacola";
import { initialStateSacola } from "../../components/Screen/Sacola/types";
import { PerfilScreen } from "../../components/Screen/Perfil";

const Tab = createBottomTabNavigator();

const CustomerTabsNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Sacola"
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    height: 60
                }
            }}>
            <Tab.Group>
                <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome name='home' size={size} color={color} />
                        } else {
                            return <FontAwesome name='home' size={size} color={color} />
                        }
                    },
                }} />
                <Tab.Screen name="Sacola" component={() => <Sacola idCliente={""} produtosNaSacola={[]} valorTotal={0}/>}
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
                <Tab.Screen name="Pedidos" component={Pedidos} 
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
            </Tab.Group>
        </Tab.Navigator>
    )
}

export default CustomerTabsNavigator;