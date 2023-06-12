import { PedidoType } from "./PedidoType";
import { ProdutoType } from "./ProdutoType";

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

export const initialStateCantina: CantinaType = {
  id: '',
  idCampus: "",
  nome: "",
  descricao: "",
  status: "",
  cardapio: [],
  avaliacoes: {
    comentario: "",
    clienteId: "",
    nota: 0
  },
  pedidos: []
}