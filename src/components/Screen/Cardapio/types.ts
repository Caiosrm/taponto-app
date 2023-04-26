import { Timestamp } from "firebase/firestore";

export interface ICardapioScreenProps {
    pageTitle: "Home" | "Login" | "Cardapio" | "Sacola" | "Carteira" | "Perfil",
    produto: IProduto; //um produto
    produtos: IProduto[]; //array de produtos
}

export interface IProduto {
    id?: any;
    nome: string;
    lanchonete: string;
    valor: number;
    descricao: string;
    tipoDeAlimento: string;
    calorias: number;
    quantidade: number;
    ingredientes: string;
    imagem: string;
    avaliacao: number;
    review: string;
}
