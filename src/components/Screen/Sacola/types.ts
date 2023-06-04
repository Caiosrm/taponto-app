import { ProdutoType } from "../../../api/types/ProductType";
import { IProduto, initialStateProduto } from "../Cardapio/types";
export interface ISacolaScreenProps {
        idCliente: string;
        produtosNaSacola: ProdutoType[];
        valorTotal: number;
}

export const initialStateSacola: ISacolaScreenProps = {
    idCliente: '',
    produtosNaSacola: [],
    valorTotal: 0
}
