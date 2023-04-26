import { Timestamp } from "firebase/firestore";

export interface ICardapioScreenProps {
    pageTitle: "Home" | "Login" | "Cardapio" | "Sacola" | "Carteira" | "Perfil",
    produto: IProduto; //um produto
    produtos: IProduto[]; //array de produtos
}

interface IProduto {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    estoque: number;
    tempoDeEspera: number;
};