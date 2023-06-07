import { extendTheme, ColorMode, useColorMode } from 'native-base';
import { IThemeProps } from './IThemeProps';
import { useState } from 'react';



export const colors: IThemeProps["colors"] = { //Esquema de Cores
    light: {
        brancoPuro: '#FFFFFF',
        background: '#F5F5F5',
        azulTurquesa: '#0094d3',
        azulPetroleo: '#2a627e',
        azulMarinho: '#0c3a4c',
        azulRoyal: '#002060',
        pretoPuro: '#000000'
    },

    dark: {
        pretoPuro: '#000000',
        background: '#292d2e',
        azulRoyal: '#002060',
        azulMarinho: '#0c3a4c',
        azulPetroleo: '#2a627e',
        azulTurquesa: '#0094d3',
        brancoPuro: '#FFFFFF',

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

