/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FullPokemon } from '../interfaces/pokemonInterfaces';


//este hook se diseño para traerme toda la informacion posible del pokemon en cuestion mediante una nueva peticion
export const usePokemon = (id: string) => {

    const [isLoading, setisLoading] = useState(true);
    const [pokemon, setpokemon] = useState<FullPokemon>();


    useEffect(() => {
        setisLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                // Verificar si la respuesta HTTP tiene éxito (código 200)
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                }
                // Parsear la respuesta JSON y tiparla
                return response.json() as Promise<FullPokemon>; // 'as' para especificar el tipo
            })
            .then(data => {
                setpokemon(data);
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);
            })
            .finally(() => setisLoading(false));


    }, []);


    return {
        isLoading,
        pokemon,
    };
};
