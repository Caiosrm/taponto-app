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