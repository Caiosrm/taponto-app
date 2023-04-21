import { View,   useTheme } from "native-base";
import AppBar from "../AppBar";
import React, { useState } from 'react';
import CardapioScreen from "../Cardapio";


const HomeScreen = () => {
    
    const { colors } = useTheme();

    const [ThemeMode, setThemeMode] = useState('light'); // Estado do modo de cor da aplicação

    return (
        <View>
            <AppBar title='inicio'/>
            

        </View>

    );
};

export default HomeScreen;



