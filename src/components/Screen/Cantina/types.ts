import { ICardapioProps } from "../Cardapio/types";
import { IPedidoProps } from "../Pedidos/types";

export interface ICantinaProps {
    lanchonete: {
        id: string;
        nome: string;
        idCardapio: string;
        cardapio: ICardapioProps;
        avaliacao: {
            review: number;
            descricao: string;
            matricula: string;
        };
        status: string;
        pedido: IPedidoProps;
        pedidos: IPedidoProps[];
    }
}