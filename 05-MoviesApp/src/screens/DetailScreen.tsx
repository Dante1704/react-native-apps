import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }


export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { height } = useWindowDimensions();

    return (
        <ScrollView>
            <View style={{
                ...styles.posterImageContainer,
                height: height * 0.7,
            }}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View style={styles.marginContainer}>
                <Icon name="star-outline" color="gray" size={20} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    posterImageContainer: {
        width: '100%',
        paddingBottom: 10,
        borderRadius: 30,
        shadowColor: '#929292',
        shadowOffset: {
            width: 0,
            height: 2,
        },//iOS only
        shadowOpacity: 0.24,//iOS only
        shadowRadius: 7,//iOS only

        elevation: 3,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
