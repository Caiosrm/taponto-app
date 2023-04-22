import { extendTheme, ColorMode } from 'native-base';
import { IThemeProps } from './IThemeProps';
import { useState } from 'react';

export const [themeMode, setThemeMode] = useState<ColorMode>("light"); // State do modo de cor da aplicação


const toggleColorMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light'; // Alterna entre os modos de cor
    setThemeMode(newMode); // Define o novo modo de cor
};


export const colors: IThemeProps["colors"] = { //Esquema de Cores
    light: {
        brancoFumaca: '#F1F5F4',
        azulCiano: '#5CC6BA',
        cinza: '#A0A0A0',
        cinzaEscuro: '#717F7F',
    },
    dark: {
        azulDark: '#142c29',
        brancoFumaca: '#F1F5F4',
    },
};

const theme = extendTheme<IThemeProps>({ //Configurações do tema
    colors,
    config: {
        initialColorMode: 'light', // Cor padrão do tema
        useSystemColorMode: false, // Usar tema padrão de sistema?
        colorModeTypes: ['light', 'dark'], //Tipos de modo de cor
    },
});

export default theme;

