import { PedidoType } from "./PedidoType";
import { SacolaType } from "./SacolaType";


export type ClienteType = {
    id: string;
    nome: string;
    matricula: number;
    polo: string;
    sacola: SacolaType;
    pedidos: PedidoType[];
    favoritos: string[];
};

export const initialStateCliente: ClienteType = {
    id: "",
    nome: "",
    matricula: 0,
    polo: "",
    sacola: {
        id: '',
        idCliente: '',
        valorTotal: 0,
        itens: []
    },
    pedidos: [],
    favoritos: []
}


  
