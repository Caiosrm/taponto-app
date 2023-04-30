export interface IHomeScreenProps {
    pageTitle?: "Home",
    cantina?: any;
    cantinas?: any[];
}

interface ICantina {
    id: string;
    nome: string;
    
}

export const initialStateHome: IHomeScreenProps = {
    pageTitle: "Home",
    cantina: undefined,
    cantinas: []
}
