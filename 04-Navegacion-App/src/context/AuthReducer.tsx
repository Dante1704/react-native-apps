import { AuthState } from './AuthContext';


// le tengo que pedir que retorne siempre algo de tipo AuthState para que no crashee la app
export const authReducer = (state: AuthState, action: any): AuthState => {
    return state;
};
