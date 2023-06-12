import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import CadastroProdutoScreen from '../../components/Screen/PainelCantina/CadastroProdutoScreen';
import { ManterProdutosScreen } from '../../components/Screen/PainelCantina/ManterProdutosScreen';
import { PerfilScreen } from '../../components/Screen/Perfil';
import { PainelCantinaScren } from '../../components/Screen/PainelCantina/PainelCantinaScren';

const Tab = createBottomTabNavigator();


type ShopStackParamsList = {
    PainelCantina: undefined;
}

const ShopTabsNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='PainelCantinaScreen'>
            <Tab.Screen name='Perfil'
                component={PainelCantinaScren}
                options={{ headerShown: false }} />

            <Tab.Screen name='Cadastrar Produto'
                component={CadastroProdutoScreen}
                options={{ headerShown: false }} />

            <Tab.Screen name='Meu Cardapio'
                component={ManterProdutosScreen}
                options={{ headerShown: false }} />
        </Tab.Navigator>
    )

}

export default ShopTabsNavigator;