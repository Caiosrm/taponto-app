import { ProdutoType } from "./ProdutoType";

export type CardapioType = {
    cantinaId: string;
    itens: ProdutoType[];
}

export const initialStateCardapio: CardapioType = {
    cantinaId: '',
    itens: [],
}
