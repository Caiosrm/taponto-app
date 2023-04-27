export interface IHomeScreenProps {
    pageTitle: "Home" | "Login" | "Cardapio" | "Sacola" | "Carteira" | "Perfil" | "Pedidos",

    cantina: ICantina;
    cantinas: ICantina[];
}

interface ICantina {
    id: string;
    nome: string;
    
}