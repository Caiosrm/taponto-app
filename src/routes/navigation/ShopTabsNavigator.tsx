import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import CadastroProdutoScreen from '../../components/Screen/Cantina/CadastroProdutoScreen';
import { ManterProdutosScreen } from '../../components/Screen/Cantina/ManterProdutosScreen';
import { PainelCantinaScreen } from '../../components/Screen/Cantina/PainelCantinaScreen';
import { PedidosCantinaScreen } from '../../components/Screen/Cantina/PedidosCantinaScreen';
import { Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


type ShopStackParamsList = {
    PainelCantina: undefined;
}

const ShopTabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Perfil'
                component={PainelCantinaScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Entypo name='shop' size={size} color={color} />
                        } else {
                            return <Entypo name='shop' size={size} color={color} />
                        }
                    },

                }}
            />
            <Tab.Screen
                name='Novo Produto'
                component={CadastroProdutoScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <MaterialIcons name='post-add' size={size} color={color} />
                        } else {
                            return <MaterialIcons name='post-add' size={size} color={color} />
                        }
                    },
                }}
            />
            <Tab.Screen
                name='Cardapio'
                component={ManterProdutosScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='ios-newspaper-outline' size={size} color={color} />
                        } else {
                            return <Ionicons name='ios-newspaper-outline' size={size} color={color} />
                        }
                    },
                }}
            />
            <Tab.Screen
                name='Pedidos'
                component={PedidosCantinaScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <MaterialCommunityIcons name='order-bool-descending-variant' size={size} color={color} />
                        } else {
                            return <MaterialCommunityIcons name='order-bool-descending-variant' size={size} color={color} />
                        }
                    },
                }}
            />
        </Tab.Navigator>
    )

}

export default ShopTabsNavigator;