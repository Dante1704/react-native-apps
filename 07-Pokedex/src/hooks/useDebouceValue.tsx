/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

interface Props {
    value: string,
    time?: number,
}


//este hook solo me setea el valor del input si pasa un cierto tiempo, en este caso por defecto medio segundo

export const useDebouceValue = ({ value = '', time = 500 }: Props) => {
    const [debouncedValue, setDebouncedValue] = useState(value);


    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, time);

        return () => {
            clearTimeout(timeout);
        };

    }, [value]);

    return { debouncedValue };
};
