import { PedidoType } from "./PedidoType";

export type UserType = {
    id?: string;
    nome: string;
    matricula: string;
    favoritos: string[];
    pedidos: PedidoType[];
} 