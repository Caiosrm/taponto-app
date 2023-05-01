import React from 'react';

type ThemeContextType = {
    colorMode: string;
    toggleColorMode: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
    colorMode: 'light',
    toggleColorMode: () => {},
});

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [colorMode, setColorMode] = React.useState<string>('light');
    
    const toggleColorMode = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
