import React, { useContext, useState } from 'react';
import { AuthError, onAuthStateChanged, User } from '@firebase/auth';
import { useSignInWithEmailAndPassword, useSignOut, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../api/config/firebaseConfig';
import InitialLoading from '../components/Common/LoadingSpinner';


export const useClienteLogado = () => {
    const { clienteLogado } = useAuth();
    return clienteLogado;
};

export const useCantinaLogada = () => {
    const { cantinaLogada } = useAuth();
    return cantinaLogada;
};

type UserContextType = {
    user: User | undefined | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    loading: boolean;
    error: AuthError | undefined;
    sendPasswordResetEmailError: boolean;
    sendPasswordReset: (email: string) => void;
    clienteLogado: boolean;
    setClienteLogado: (clienteLogado: boolean) => void;
    cantinaLogada: boolean;
    setCantinaLogada: (cantinaLogada: boolean) => void;
};

export const AuthContext = React.createContext<UserContextType>({
    user: undefined,
    signIn: async () => { },
    signOut: async () => { },
    loading: false,
    error: undefined,
    sendPasswordReset: () => { },
    sendPasswordResetEmailError: false,
    clienteLogado: false,
    setClienteLogado: () => { },
    cantinaLogada: false,
    setCantinaLogada: () => { }
});

export const AuthProvider = ({ children }: any) => {
    const [clienteLogado, setClienteLogado] = useState<boolean>(false);
    const [cantinaLogada, setCantinaLogada] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = React.useState<User | null>();
    const [signInWithEmailAndPassword, credentials, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const [sendPasswordResetEmail, sendPasswordResetEmailError] = useSendPasswordResetEmail(auth);

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(email, password);
    };

    const signOutApp = async () => {
        await signOut();
    };

    const sendPasswordReset = (email: string) => {
        return sendPasswordResetEmail(email);
    };

    React.useEffect(() => {
        onAuthStateChanged(auth, setCurrentUser);
    }, [])

    if (signOutLoading) {
        return <InitialLoading />
    }

    return (
        <AuthContext.Provider value={{ clienteLogado, setClienteLogado, cantinaLogada, setCantinaLogada, user: currentUser, signIn, signOut: signOutApp, loading, error, sendPasswordReset, sendPasswordResetEmailError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);