import { PedidoType } from "./OrderType";
import { ProdutoType } from "./ProductType";

export type CantinaType = {
  id: string;
  idCampus: string;
  nome: string;
  descricao: string;
  status: string;
  cardapio: ProdutoType[];
  avaliacoes: {
    comentario: string;
    clienteId: string;
    nota: number;
  };
  pedidos: PedidoType[];
};
