import React, { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

//defino la informacion que va a tener el context object
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// defino un estado global para cuando inicia la aplicacion
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

//defino las props de lo que va a exponer el context a los componentes suscriptos
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

//creo el context
export const AuthContext = createContext({} as AuthContextProps);

//creo el proveedor del estado que es el encargado de suscribir los componentes que yo desee al estado global
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    return (
        <AuthContext.Provider
            value={{
                authState: authInitialState,
                signIn: () => { },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
