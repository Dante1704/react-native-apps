import React, { createContext, useEffect, useReducer } from 'react';
import { ThemeState, darkTheme, lightTheme, themeReducer } from './ThemeReducer';
import { useColorScheme } from 'react-native';

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme();  // esto me traer el theme que el usuario tiene en su OS.

    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme); // con esa condicion, la app va a iniciar con el esquema de color que tiene el usuario en su OS.

    //Con este useEffect voy a cambiar inmediatamente el esquema de color cada vez que el usuario lo cambie en la config de su telefono.
    useEffect(() => {
        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme();

    }, [colorScheme]);

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
    };

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
