import { SetStateAction } from "react";

export interface ILoginScreenProps {
  pageTitle?: string;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

//State inicial do Componente
export const initialStateLogin: ILoginScreenProps = {
  pageTitle: "Login",
  email: "",
  setEmail: (value: SetStateAction<string>) => {},
  password: "",
  setPassword: (value: SetStateAction<string>) => {},
  error: "",
  setError: (value: SetStateAction<string>) => {},
};
