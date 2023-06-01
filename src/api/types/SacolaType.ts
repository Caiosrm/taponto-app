import { IProduto } from "../../components/Screen/Cardapio/types";

export type SacolaType = {
  idCliente: string;
  valorTotal: string;
  itens: IProduto[];
};
