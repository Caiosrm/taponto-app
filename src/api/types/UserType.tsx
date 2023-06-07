import { PedidoType } from "./OrderType";

export type UserType = {
    id?: string;
    nome: string;
    matricula: string;
    favoritos: string[];
    pedidos: PedidoType[];
} 