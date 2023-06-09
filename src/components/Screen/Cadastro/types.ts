import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/types";

export interface ICadastroScreenProps {
    pageTitle?: "Cadastro",
    userId?: string;
}

export const initialStatePerfil: ICadastroScreenProps = {
    pageTitle: "Cadastro",
    userId: '',
}