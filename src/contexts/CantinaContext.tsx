import React, { createContext, useState } from 'react';
import { CantinaType } from '../api/types/CantinaType';



export const CantinaContext = createContext<CantinaType | null>(null);

export const CantinaProvider: React.FC = ({ children }: any) => {
    const [cantina, setCantina] = useState<CantinaType | null>(null);

    return (
        <CantinaContext.Provider value={cantina}>
            {children}
        </CantinaContext.Provider>
    );
};
