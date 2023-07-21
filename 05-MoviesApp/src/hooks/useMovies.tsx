import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';


interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);

    //creo un unico estado para manejar toda la info junta
    const [moviesState, SetMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {

        //defino todas las promesas de las peticiones
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        //ejecuto todas las promesas juntas para que se muestre el contenido junto cuando venga.
        //si alguna promesa falla, fallan todas.
        //response es un array con los resultados de las promesas
        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);
        //seteo todos los valores en sus respectivas keys
        SetMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        //now_playing
        getMovies();
    }, []);


    return { ...moviesState, isLoading };
};


