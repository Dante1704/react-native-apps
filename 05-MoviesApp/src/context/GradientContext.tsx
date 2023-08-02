import React, { createContext, useState } from 'react';



interface ImageColors {
    primaryColor: string,
    secondaryColor: string
}

interface ContextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    setPrevMainColors: (colors: ImageColors) => void,
    setMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps); //TODO: definir tipo

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientProvider = ({ children }: Props) => {

    const [colors, setColors] = useState<ImageColors>({
        primaryColor: 'transparent',
        secondaryColor: 'transparent',
    });
    const setMainColors = (colors: ImageColors) => {
        setColors(colors);
    };
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primaryColor: 'transparent',
        secondaryColor: 'transparent',
    });

    const setPrevMainColors = (prevColors: ImageColors) => {
        setPrevColors(prevColors);
    };



    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setPrevMainColors,
            }}>

            {children}

        </GradientContext.Provider>
    );
};
