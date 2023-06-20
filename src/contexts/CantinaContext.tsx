import React, { createContext, useState } from 'react';

import { CantinaType, initialStateCantina } from '../api/types/CantinaType';
import { useAuth } from './AuthContext';

type CantinaContextType = {
    cantina: CantinaType;
    atualizarCantina: (novaCantina: CantinaType) => void;
}

export const CantinaContext = createContext<CantinaContextType>({
    cantina: initialStateCantina,
    atualizarCantina: () => { },
});

export const CantinaProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    
    const [cantina, setCantina] = useState<CantinaType | null>(initialStateCantina);

    const atualizarCantina = (novaCantina: CantinaType) => {
        setCantina(novaCantina)
    }

    const contexto: CantinaContextType = {
        cantina: initialStateCantina,
        atualizarCantina,
    }

    return (
        <CantinaContext.Provider value={contexto}>
            {children}
        </CantinaContext.Provider>
    );
};
