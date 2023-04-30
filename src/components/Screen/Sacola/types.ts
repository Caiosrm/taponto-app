import { IProduto, initialStateProduto } from "../Cardapio/types";
export interface ISacolaScreenProps {
        pageTitle?: "Sacola";
        produtosNaSacola?: any[];
        produto?: IProduto;
}

export const initialStateSacola: ISacolaScreenProps = {
    pageTitle: "Sacola",
    produtosNaSacola: [],
    produto: initialStateProduto
    

}
