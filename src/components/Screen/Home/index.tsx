import { View, useTheme } from "native-base";
import AppBar from "../../Common/AppBar";
import React, { useState } from 'react';
import CardapioScreen from "../Cardapio";


const HomeScreen = () => {

    //================================================================
    //STATES
    //================================================================
    const { colors } = useTheme();
    const [ThemeMode, setThemeMode] = useState('light'); // State do modo de cor da aplicação



    return (
        <View>
            <AppBar title='inicio' />


        </View>

    );
};

export default HomeScreen;



