/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';


//el proposito de este hook es traerse todos los pokemons juntos y hacer la busqueda en base eso
//la PokeAPI no ofrece un endpoint donde haga una busqueda en base a una expresion regular para por ejemplo
//traer todos los pokemons que empiecen con p
//asique hay que desarrollarla
export const usePokemonSearch = () => {

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isFetching, setIsFetching] = useState(true);


    const loadPokemons = async () => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=1200')
            .then((response) => {
                // Verificar si la respuesta HTTP tiene éxito (código 200)
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                }
                // Parsear la respuesta JSON y tiparla
                return response.json() as Promise<PokemonPaginatedResponse>; // Usamos 'as' para especificar el tipo
            })
            .then(data => {
                mapPokemonListToSimplePokemon(data.results);
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);
            })
            .finally(() => setIsFetching(false));

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
        setSimplePokemonList(newPokemonList);
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isFetching,
        simplePokemonList,
    };
};
