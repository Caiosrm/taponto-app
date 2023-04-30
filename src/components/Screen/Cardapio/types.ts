import { Timestamp } from "firebase/firestore";

export interface ICardapioScreenProps {
    pageTitle: "Home" | "Login" | "Cardapio" | "Sacola" | "Carteira" | "Perfil" | "Pedidos",
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

export const initialStateProduto: IProduto = {
    nome: '',
    lanchonete: '',
    valor: 0,
    descricao: '',
    tipoDeAlimento: '',
    calorias: 0,
    quantidade: 0,
    ingredientes: '',
    imagem: '',
    avaliacao: 0,
    review: ''
};