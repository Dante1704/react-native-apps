/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';


export const usePokemonPaginated = () => {

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');

    const loadPokemons = async () => {
        setIsLoading(true);
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
            })
            .finally(() => setIsLoading(false));

    };

    //esta funcion mapea la respuesta de un tipo hacia otro
    const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return { id, picture, name };
        }
        );

        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isLoading, simplePokemonList, loadPokemons,
    };
};
