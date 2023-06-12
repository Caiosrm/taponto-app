import { ProdutoType } from "../../../api/types/ProdutoType";

export interface IPedidoProps {
    pageTitle?: string;
    status?: string;
    produto?: ProdutoType;
    produtos?: ProdutoType[];
}


export const initialStatePedido: ProdutoType = {
    status: "",
    produto: initialStateProduto,
    produtos: []
}