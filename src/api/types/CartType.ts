import { IProduto } from "../../components/Screen/Cardapio/types";

export type SacolaType = {
  id: string;
  idCliente: string;
  valorTotal: string;
  itens: IProduto[];
};
