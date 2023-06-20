import React, { createContext, useState } from 'react';
import { CantinaType, initialStateCantina } from '../api/types/CantinaType';
import { useAuth } from './AuthContext';


export const CantinaContext = createContext<CantinaType>(initialStateCantina);



export const CantinaProvider: React.FC = ({ children }: any) => {
    const [cantina, setCantina] = useState<CantinaType>(initialStateCantina);




    return (
        <CantinaContext.Provider value={cantina}>
            {children}
        </CantinaContext.Provider>
    );
};
