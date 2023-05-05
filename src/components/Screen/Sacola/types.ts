import { IProduto, initialStateProduto } from "../Cardapio/types";
export interface ISacolaScreenProps {
        pageTitle?: "Sacola";
        produtosNaSacola?: any[];
        produto?: IProduto;
        valorTotal?: number;

}

export const initialStateSacola: ISacolaScreenProps = {
    pageTitle: "Sacola",
    produtosNaSacola: [],
    produto: initialStateProduto
    

}
