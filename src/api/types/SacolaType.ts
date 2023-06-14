import { ProdutoType } from "./ProdutoType";

export type SacolaType = {
  id: string;
  idCliente: string;
  valorTotal: string;
  itens: ProdutoType[];
};

export const initialStateSacola: SacolaType = {
  id: "",
  idCliente: "",
  valorTotal: "",
  itens: []
}
