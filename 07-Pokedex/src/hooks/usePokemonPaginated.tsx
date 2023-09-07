import { useEffect, useRef } from 'react';


export const usePokemonPaginated = () => {


    const urlNextPage = 'https://pokeapi.co/api/v2/pokemon/?offset=&limit=40';
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');

    const loadPokemons = async () => {
        try {
            const data = await fetch(nextPageUrl.current).then(response => response.json());
            console.log(data);
            nextPageUrl.current = data.next;

        } catch (error) {
            console.error(error);
        }

    };
    useEffect(() => {
        loadPokemons();
    }, []);

    return {

    };
};
