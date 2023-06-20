import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Octicons, Ionicons, Entypo } from "@expo/vector-icons";

import HomeScreen from "../../components/Screen/Cliente/HomeScreen";
import Pedidos from "../../components/Screen/Cliente/PedidosClienteScreen";
import Sacola from "../../components/Screen/Cliente/SacolaScreen";
import SacolaScreen from "../../components/Screen/Cliente/SacolaScreen";
import PedidosClienteScreen from "../../components/Screen/Cliente/PedidosClienteScreen";
import { PerfilClienteScreen } from "../../components/Screen/Cliente/PerfilClienteScreen";


const Tab = createBottomTabNavigator();


const CustomerTabsNavigator = () => {


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    height: 60
                }
            }}>

            <Tab.Group>

                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false, tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <FontAwesome name='home' size={size} color={color} />
                            } else {
                                return <FontAwesome name='home' size={size} color={color} />
                            }
                        },
                    }}
                />

                <Tab.Screen
                    name="Sacola"
                    component={SacolaScreen}
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

                <Tab.Screen
                    name="Pedidos"
                    component={PedidosClienteScreen}
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

                <Tab.Screen
                    name="Perfil"
                    component={PerfilClienteScreen}
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