import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CustomerTabsNavigator from './navigation/CustomerTabsNavigator';
import ShopTabsNavigator from './navigation/ShopTabsNavigator';

const Stack = createStackNavigator();

export const WrapperNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='CustomerTabsNavigator'>
      <Stack.Screen name="ShopTabsNavigator" component={ShopTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerTabsNavigator" component={CustomerTabsNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}