import React, { createContext, useState } from 'react';
import { SacolaType } from '../api/types/SacolaType';
import { PedidoType } from '../api/types/PedidoType';

type ClienteData = {
    id: string;
    nome: string;
    matricula: number;
    polo: string;
    sacola: SacolaType;
    pedidos: PedidoType[];
};

export const ClienteContext = createContext<ClienteData | null>(null);

export const ClienteProvider: React.FC = ({ children }: any) => {
    const [clienteData, setClienteData] = useState<ClienteData | null>(null);

    return (
        <ClienteContext.Provider value={clienteData}>
            {children}
        </ClienteContext.Provider>
    );
};
