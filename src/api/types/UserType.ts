import { CampusType, initialStateCampus } from "./CampusType";
import { PedidoType } from "./PedidoType";
import { SacolaType, initialStateSacola } from "./SacolaType";


export type ClienteType = {
    id: any;
    nome: string;
    matricula: number;
    polo: CampusType;
    celular: string;
    email: string;
    senha: string;
    sacola?: SacolaType;
    pedidos?: PedidoType[];
    favoritos?: string[];
};

export const initialStateCliente: ClienteType = {
    id: "",
    nome: "",
    matricula: 0,
    polo: initialStateCampus,
    sacola: initialStateSacola,
    celular: "",
    email: "",
    senha: "",
    pedidos: [],
    favoritos: []
}