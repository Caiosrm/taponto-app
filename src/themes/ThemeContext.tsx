import React from 'react';

type ThemeContextType = {
    colorMode: string;
    toggleColorMode: React.Dispatch<React.SetStateAction<any>>;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const useColorMode = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [colorMode, setColorMode] = React.useState<string>('light');
    return [colorMode, setColorMode];
}



export function ThemeProvider(props: ThemeProviderProps) {
    const [colorMode, toggleColorMode] = useColorMode();





    return (
        <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
