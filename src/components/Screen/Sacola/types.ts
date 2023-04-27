import { IProduto } from "../Cardapio/types";

export interface ISacolaScreenProps {
    pageTitle: "Home" | "Login" | "Cardapio" | "Sacola" | "Carteira" | "Perfil";
    produtosNaSacola: any[];
    produto: IProduto; //um produto
    produtos: IProduto[]; //array de produtos
}