import { ProdutoType, initialStateProduto } from "./ProdutoType";

export type SacolaType = {
  id?: string;
  idCliente?: string;
  valorTotal?: number;
  itens?: ProdutoType[];
};

export const initialStateSacola: SacolaType = {
  id: "",
  idCliente: "",
  valorTotal: 0,
  itens: [initialStateProduto, initialStateProduto]
}
