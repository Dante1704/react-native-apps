import { AuthState } from './AuthContext';


type AuthAction = { type: 'signIn' }

// le tengo que pedir que retorne siempre algo de tipo AuthState para que no crashee la app
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no user name yet',
            }; //nuevo estado

        default:
            return state;
    }
};
