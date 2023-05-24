import { IProduto, initialStateProduto } from "../Cardapio/types";
export interface ISacola {
        id?: string;
        produtosNaSacola?: IProduto[];
        valorTotal?: number;
}

export const initialStateSacola: ISacola = {
    produtosNaSacola: [],
    valorTotal: 0
}
