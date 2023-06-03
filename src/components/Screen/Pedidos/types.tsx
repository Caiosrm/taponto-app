import { IProduto, initialStateProduto } from "../Cardapio/types";

export interface IPedidoProps {
    status?: string;
    produto?: IProduto;
    produtos?: IProduto[];
}


export const initialStatePedido: IPedidoProps = {
    status: "",
    produto: initialStateProduto,
    produtos: []
}