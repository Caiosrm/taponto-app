import { ICardapioProps } from "../Cardapio/types";
import { IPedidoProps } from "../Pedidos/types";

export interface ICantinaProps {
    lanchonete: {
        id: string;
        nome: string;
        idCardapio: string;
        cardapio: ICardapioProps;
        descricao: string;
        avaliacao: {
            comentario: string;
            matricula: string;
            review: number;
        };
        status: string;
        pedido: IPedidoProps;
        pedidos: IPedidoProps[];
    }
}