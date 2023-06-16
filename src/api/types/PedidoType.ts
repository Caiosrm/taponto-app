import { ProdutoType, initialStateProduto } from "./ProdutoType";
import { initialStateSacola } from "./SacolaType";

export type PedidoType = {
    id: string;
    idCliente: string;
    idCantina: string;
    itens: ProdutoType[];
    valorTotal: number;
    formaPagamento: "Pix" | "Cartão de Crédito" | "Cartão de Débito" | "À Vista";
    status: "Pedido em Análise" | "Pedido em Preparo" | "Pronto para Retirada" | "Finalizado";
}

export const initialStatePedido: PedidoType = {
    id: "",
    idCliente: "",
    idCantina: "",
    itens: [],
    valorTotal: 0,
    formaPagamento: "Pix",
    status: "Pedido em Análise"
}