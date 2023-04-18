import { extendTheme, ColorMode } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IColorScheme } from './IColorScheme';
import { ITheme } from './ITheme';


const colors: IColorScheme = {
    light: {
        primary: 'blue.500',
        secondary: 'gray.600',
        // ... outras cores do tema claro
    },
    dark: {
        primary: 'blue.200',
        secondary: 'gray.300',
        // ... outras cores do tema escuro
    },
};

const theme = extendTheme<ITheme>({
    colors,
    config: {
        // Define a cor padrão do tema
        initialColorMode: 'light',
        // Define os nomes dos temas claro e escuro
        useSystemColorMode: false,
        colorModeTypes: ['light', 'dark'],
    },
});

export default theme;