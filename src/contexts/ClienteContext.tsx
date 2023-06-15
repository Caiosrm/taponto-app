import React, { createContext, useState } from 'react';

import { ClienteType } from '../api/types/UserType';

export const ClienteContext = createContext<ClienteType | null>(null);

export const ClienteProvider: React.FC = ({ children }: any) => {
    const [clienteData, setClienteData] = useState<ClienteType | null>(null);

    return (
        <ClienteContext.Provider value={clienteData}>
            {children}
        </ClienteContext.Provider>
    );
};
