import { AuthState } from './AuthContext';


type AuthAction = { type: 'signIn' } |
{ type: 'setFavoriteIcon', payload: string } |
{ type: 'logOut' }

// le tengo que pedir que retorne siempre algo de tipo AuthState para que no crashee la app
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no user name yet',
            }; //nuevo estado
        case 'setFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        //nuevo estado
        case 'logOut':
            return {
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
            };
        default:
            return state;
    }
};
