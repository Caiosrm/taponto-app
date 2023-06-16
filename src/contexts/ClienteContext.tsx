import React, { createContext, useState } from 'react';

import { ClienteType, initialStateCliente } from '../api/types/UserType';

type ClienteContextType = {
    cliente: ClienteType | null;
    atualizarCliente: (novoCliente: ClienteType) => void;
  };

  
  export const ClienteContext = createContext<ClienteContextType>({
    cliente: initialStateCliente,
    atualizarCliente: () => {},
  });
  
  export const ClienteProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    
    const [cliente, setCliente] = useState<ClienteType | null>(initialStateCliente);
  
    const atualizarCliente = (novoCliente: ClienteType) => {
      setCliente(novoCliente);
    };
  
    const contexto: ClienteContextType = {
      cliente,
      atualizarCliente,
    };
  
    return (
      <ClienteContext.Provider value={contexto}>
        {children}
      </ClienteContext.Provider>
    );
  };
  