import { ICardapioProps } from "../Cardapio/types";

export interface ICantinaScreenProps {
    id: string;
    nome: string;
    idCardapio: string;
    cardapio: ICardapioProps;
}

