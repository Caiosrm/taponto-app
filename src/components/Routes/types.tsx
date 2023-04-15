import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Cardapio: { idCardpio: number };
    Carteira: { idCliente: number };
    ConfigPerfil: { id: number };
    Perfil: { idCliente: number };
    Sacola: { idCliente: number };
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export type CardapioScreenRouteProp = RouteProp<RootStackParamList, 'Cardapio'>;
export type CardapioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cardapio'>;

export type CarteiraScreenRouteProp = RouteProp<RootStackParamList, 'Carteira'>;
export type CarteiraScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Carteira'>;

export type ConfigPerfilScreenRouteProp = RouteProp<RootStackParamList, 'ConfigPerfil'>;
export type ConfigPerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ConfigPerfil'>;

export type SacolaScreenRouteProp = RouteProp<RootStackParamList, 'Sacola'>;
export type SacolaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Sacola'>;

export type PerfilScreenRouteProp = RouteProp<RootStackParamList, 'Perfil'>;
export type PerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;