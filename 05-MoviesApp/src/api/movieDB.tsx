import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzIzMDIxYjI1OGNiODdlOTJiZTlkMWVhMGQ1NzAxOSIsInN1YiI6IjY0YjMwMGQ0MjNkMjc4MDEwNzMwNzhkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFSmGzyyHDJqaVjY6CLd5fSAwdon8yJvEiC8Cjl1nOI',
    },
    params: {
        language: 'es',
    },
});

export default movieDB;
