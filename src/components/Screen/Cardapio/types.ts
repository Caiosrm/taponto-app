import { Timestamp } from "firebase/firestore";

export interface ICardapioScreenProps {
    pageTitle: "Home" | "Login" | "Cardapio" | "Sacola" | "Carteira" | "Perfil",
    produto: IProduto; //um produto
    produtos: IProduto[]; //array de produtos
}

export interface IProduto {
    id: any;
    price: any;
    description: any;
    image: any;
};