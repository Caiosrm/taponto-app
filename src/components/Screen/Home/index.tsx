import { useTheme } from "native-base";
import AppBar from "../AppBar";
import React, { useState, } from 'react';
import CardapioScreen from "../Cardapio";




const HomeScreen = () => {
    
    const { colors } = useTheme();
    const [ThemeMode, setThemeMode] = useState('light'); // Estado do modo de cor da aplicação

    const toggleColorMode = () => {
        const newMode = ThemeMode === 'light' ? 'dark' : 'light'; // Alterna entre os modos de cor
        setThemeMode(newMode); // Define o novo modo de cor
    };

    return (
        <>
            <AppBar title='inicio'/>
            <CardapioScreen/>
            </>
           
        

    )
};

export default HomeScreen;



