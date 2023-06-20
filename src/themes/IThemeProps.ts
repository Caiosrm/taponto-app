import { ColorMode } from 'native-base';

export interface IThemeProps {

    colors: {
        light: {
            background: string;
            azulPetroleo: string;
            azulTurquesa: string;
            azulMarinho: string;
            azulRoyal: string;
            brancoPuro: string;
            pretoPuro: string;

        };
        dark: {
            background: string;
            azulPetroleo: string;
            azulTurquesa: string;
            azulMarinho: string;
            azulRoyal: string;
            brancoPuro: string;
            pretoPuro: string;

        };
    };

    config: {
        initialColorMode: ColorMode;
        useSystemColorMode: boolean;
        colorModeTypes: ColorMode[];
    };
}