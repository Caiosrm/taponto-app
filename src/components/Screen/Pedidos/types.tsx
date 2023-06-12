import { ProdutoType, initialStateProduto } from "../../../api/types/ProdutoType";

export interface IPedidosScreenProps {
    pageTitle?: string;
    status?: "Aberto" | ".;/";
    produto?: ProdutoType;
    produtos?: ProdutoType[];
}


export const initialStatePedidos: IPedidosScreenProps = {
    pageTitle: "Meus Pedidos"

}