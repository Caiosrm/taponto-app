import { ProdutoType } from "./ProdutoType";

export type SacolaType = {
  id: string;
  idCliente: string;
  valorTotal: string;
  itens: ProdutoType[];
};
