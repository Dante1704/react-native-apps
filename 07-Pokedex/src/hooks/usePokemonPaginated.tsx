/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';


export const usePokemonPaginated = () => {

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');

    const loadPokemons = async () => {

        fetch(nextPageUrl.current)
            .then((response) => {
                // Verificar si la respuesta HTTP tiene éxito (código 200)
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                }
                // Parsear la respuesta JSON y tiparla
                return response.json() as Promise<PokemonPaginatedResponse>; // Usamos 'as' para especificar el tipo
            })
            .then(data => {
                nextPageUrl.current = data.next;
                mapPokemonListToSimplePokemon(data.results);
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);
            });

    };

    //esta funcion mapea la respuesta de un tipo hacia otro
    const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
        pokemonList.map(poke => console.log(poke.name));
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return {

    };
};
