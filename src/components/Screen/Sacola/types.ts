import { ProdutoType, initialStateProduto } from "../../../api/types/ProdutoType";
export interface ISacolaScreenProps {
        idCliente: string;
        produtosNaSacola: ProdutoType[];
        valorTotal: number;
}

export const initialStateSacola: ISacolaScreenProps = {
    idCliente: '',
    produtosNaSacola: [initialStateProduto],
    valorTotal: 0
}
