import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCartelera, setpeliculasEnCartelera] = useState<Movie[]>([]);

    const getMovies = async () => {
        const res = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setpeliculasEnCartelera(res.data.results);
        setIsLoading(false);
    };

    useEffect(() => {
        //now_playing
        getMovies();
    }, []);


    return { peliculasEnCartelera, isLoading };
};


