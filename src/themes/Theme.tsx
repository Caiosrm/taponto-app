import { extendTheme, ColorMode } from 'native-base';
import { IColorScheme } from './IColorScheme';
import { ITheme } from './ITheme';
import { useState } from 'react';



//const [ThemeMode, setThemeMode] = useState<ColorMode>('light'); // State do modo de cor da aplicação

const colors: IColorScheme = { //Esquema de Cores
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

const theme = extendTheme<ITheme>({ //Configurações do tema
    colors,
    config: {
        initialColorMode: 'light', // Cor padrão do tema
        useSystemColorMode: false, // Usar tema padrão de sistema?
        colorModeTypes: ['light', 'dark'], //Tipos de modo de cor
    },
});

export default theme;







// const toggleColorMode = () => {
//     const newMode = ThemeMode === 'light' ? 'dark' : 'light'; // Alterna entre os modos de cor
//     setThemeMode(newMode); // Define o novo modo de cor
// };