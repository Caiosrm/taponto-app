import { View, Text, Button, useTheme } from "native-base";
import AppBar from "../AppBar";
import React, { useState } from 'react';

const HomeScreen = () => {
    const { colors } = useTheme();
    const [ThemeMode, setThemeMode] = useState('light'); // Estado do modo de cor da aplicação

    const toggleColorMode = () => {
        const newMode = ThemeMode === 'light' ? 'dark' : 'light'; // Alterna entre os modos de cor
        setThemeMode(newMode); // Define o novo modo de cor
    };

    return (
        <View>
            <AppBar />
            <Button onPress={toggleColorMode}>Toggle Color Mode</Button>
            <Text>teste</Text>

        </View>

    )
};

export default HomeScreen;



