import { ColorMode } from 'native-base';
import { IColorScheme } from './IColorScheme';

export interface ITheme {
    colors: IColorScheme;
    config: {
        initialColorMode: ColorMode;
        useSystemColorMode: boolean;
        colorModeTypes: ColorMode[];
    };
}