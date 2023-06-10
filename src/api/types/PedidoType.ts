import { IProduto } from "../../components/Screen/Cardapio/types";

export type PedidoType = {
    id: string;
    idCliente: string;
    idCantina: string;
    itens: IProduto[];
    valorTotal: number;
    formaPagamento: "Pix" | "Cartão de Crédito" | "Cartão de Débito" | "À Vista";
    status: "Pedido em Análise" | "Pedido em Preparo" | "Pronto para Retirada" | "Finalizado";
}