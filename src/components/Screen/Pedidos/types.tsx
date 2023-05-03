import { IProduto, initialStateProduto } from "../Cardapio/types";

export interface IPedidoProps {
    pageTitle: "Pedidos";
    status?: string;
    produto: IProduto;
    produtos: IProduto[];
}


export const initialStatePedido: IPedidoProps = {
    pageTitle: "Pedidos",
    produto: initialStateProduto,
    produtos: []
}