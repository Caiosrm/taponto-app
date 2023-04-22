import React from 'react';

export const useColorMode = (): [any, React.Dispatch<React.SetStateAction<any>>] => {
    const [colorMode, setColorMode] = React.useState<any>('light'); // especificando a tipagem para 'any'
    return [colorMode, setColorMode];
};

export const useTitle = (): [string, React.Dispatch<React.SetStateAction<any>>] => {
    const [title, setTitle] = React.useState<string>('');
    return [title, setTitle];
};