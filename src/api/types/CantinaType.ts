import { CampusType } from "./CampusType";
import { PedidoType } from "./PedidoType";
import { ProdutoType } from "./ProdutoType";

export type CantinaType = {
  id: string;
  polo: CampusType;
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

  nome: "",
  descricao: "",
  status: "",
  cardapio: [],
  avaliacoes: {
    comentario: "",
    clienteId: "",
    nota: 0
  },
  pedidos: [],
  polo: {
    id: undefined,
    nome: "",
    rua: "",
    numero: 0,
    bairo: 0
  }
}