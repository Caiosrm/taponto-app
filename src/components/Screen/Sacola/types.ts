import { ProdutoType } from "../../../api/types/ProductType";
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
