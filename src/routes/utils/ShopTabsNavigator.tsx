import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import PainelCantinaScreen from '../../components/Screen/PainelCantina/CadastroProdutoScreen';

const Tab = createBottomTabNavigator();


type ShopStackParamsList = {
    PainelCantina: undefined;
}

const ShopTabsNavigator = () => {
return(
<Tab.Navigator>
    <Tab.Screen name='PainelCantinaScreen' component={PainelCantinaScreen}/>
</Tab.Navigator>
)

}

export default ShopTabsNavigator;