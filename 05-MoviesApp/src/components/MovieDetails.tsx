import React from 'react';
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}
export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/*detalles */}
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name="star-outline"
                    color={'grey'}
                    size={16} />
                <Text>&nbsp;{movieFull.vote_average}</Text>
                <Text style={{ marginLeft: 5 }}>
                    - {movieFull.genres.map(genre => genre.name).join(', ')}
                </Text>
            </View>
            {/*sinopsis */}
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                Sinopsis
            </Text>
            <Text>
                {movieFull.overview}
            </Text>
            <Text>
                Presupuesto
            </Text>
            <Text>
                {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
            </Text>
            {/*casting */}
        </>
    );
};
