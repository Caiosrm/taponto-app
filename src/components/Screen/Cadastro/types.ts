export interface ICadastroScreenProps {
    navigation: any;
    
    pageTitle?: "Cadastro",
    userId?: string;
}

export const initialStatePerfil: ICadastroScreenProps = {
    pageTitle: "Cadastro",
    userId: '',
}