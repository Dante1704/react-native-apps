import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import { Cast, MovieCredits } from '../interfaces/creditsInterface';



interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetailsPormise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPormise = movieDB.get<MovieCredits>(`/${movieId}/credits`);
        const [movieDetailsResponse, castPromiseResponse] = await Promise.all([movieDetailsPormise, castPormise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast,
        });

    };

    useEffect(() => {

        getMovieDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        ...state,
    };
};
