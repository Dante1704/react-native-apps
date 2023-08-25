import { Theme } from '@react-navigation/native';
type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.7)',
    dark: false,
    colors: {
        primary: 'red',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'teal',
    },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'orange',
    dark: true,
    colors: {
        primary: 'red',
        background: 'rgba(0,0,0,0.7)',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    },
};



export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_dark_theme':
            return { ...darkTheme };

        case 'set_light_theme':
            return { ...lightTheme };

        default: return state;
    }
};
