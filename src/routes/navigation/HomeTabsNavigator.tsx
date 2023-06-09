import { FontAwesome, Octicons, Ionicons, Entypo } from "@expo/vector-icons";
import HomeScreen from "../../components/Screen/Home";
import Pedidos from "../../components/Screen/Pedidos";
import Perfil from "../../components/Screen/Perfil";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sacola from "../../components/Screen/Sacola";
import { initialStateSacola } from "../../components/Screen/Sacola/types";

const Tab = createBottomTabNavigator();

const HomeTabsNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
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
                <Tab.Screen name="Perfil" component={Perfil}
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

export default HomeTabsNavigator;