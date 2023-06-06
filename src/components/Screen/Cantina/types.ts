import { ICardapioProps } from "../Cardapio/types";
import { IPedidoProps } from "../Pedidos/types";

export interface ICantinaScreenProps {
  id: string;
  nome: string;
  cardapio: ICardapioProps;
  descricao: string;
  avaliacoes: {
    comentario: string;
    clienteId: string;
    review: number;
  };
  status: string;
  pedidos: IPedidoProps[];
}
