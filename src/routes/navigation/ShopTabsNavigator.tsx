import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import PainelCantinaScreen from '../../components/Screen/PainelCantina/CadastroProdutoScreen';
import CadastroProdutoScreen from '../../components/Screen/PainelCantina/CadastroProdutoScreen';

const Tab = createBottomTabNavigator();


type ShopStackParamsList = {
    PainelCantina: undefined;
}

const ShopTabsNavigator = () => {
return(
<Tab.Navigator initialRouteName='PainelCantinaScreen' >
    <Tab.Screen name='PainelCantinaScreen' component={PainelCantinaScreen}/>
    <Tab.Screen name='CadastroProdutoScreen' component={CadastroProdutoScreen}/>
</Tab.Navigator>
)

}

export default ShopTabsNavigator;