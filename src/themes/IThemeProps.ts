import { ColorMode } from 'native-base';

export interface IThemeProps {

    colors: {
        light: {
            brancoFumaca: string;
            azulCiano: string;
            cinza: string;
            cinzaEscuro: string;
        };
        dark: {
            azulDark: string;
            brancoFumaca: string;
        };
    };
    config: {
        initialColorMode: ColorMode;
        useSystemColorMode: boolean;
        colorModeTypes: ColorMode[];
    };
}