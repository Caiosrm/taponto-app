import React, { useContext } from 'react';
import { AuthError, onAuthStateChanged, User } from '@firebase/auth';
import { useSignInWithEmailAndPassword, useSignOut, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../api/config/firebaseConfig';
import InitialLoading from '../components/Common/LoadingSpinner';


//===========================================================\\
// @author: caduuv
//===========================================================\\


// Defina o tipo UserContextType para o contexto AuthContext
type UserContextType = {
    user: User | undefined | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    loading: boolean;
    error: AuthError | undefined;
    sendPasswordResetEmailError: boolean;
    sendPasswordReset: (email: string) => void;
};

// Crie o contexto AuthContext
export const AuthContext = React.createContext<UserContextType>({
    user: undefined,
    signIn: async () => { },
    signOut: async () => { },
    loading: false,
    error: undefined,
    sendPasswordReset: () => { },
    sendPasswordResetEmailError: false
});

// Crie o componente AuthProvider para envolver seus componentes filhos com o contexto AuthContext
export const AuthProvider = ({ children }: any) => {

    const [signInWithEmailAndPassword, credentials, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const [sendPasswordResetEmail, sendPasswordResetEmailError] = useSendPasswordResetEmail(auth);
    const [currentUser, setCurrentUser] = React.useState<User | null>();

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(email, password);
    };

    React.useEffect(() => {
        onAuthStateChanged(auth, setCurrentUser);
    }, [])

    const signOutApp = async () => {
        await signOut();
    };

    const sendPasswordReset = (email: string) => {
        return sendPasswordResetEmail(email);
    }

    if (signOutLoading) {
        return <InitialLoading />
    }

    // Retorne o contexto AuthContext com os valores atuais do usuário e as funções signIn e signOut
    return (
        <AuthContext.Provider value={{ user: currentUser, signIn, signOut: signOutApp, loading, error, sendPasswordReset, sendPasswordResetEmailError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);