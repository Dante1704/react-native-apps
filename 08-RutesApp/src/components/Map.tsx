/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useGeolocation } from '../hooks/useGeolocation';
import { Loading } from '../screens/Loading';
import { Fab } from './Fab';
import { getCurrentLocation } from '../helpers/getCurrentLocation';



//componente reutilizable de mapa de google
export const Map = () => {

    const {
        hasLocation,
        initialPosition,
        userLocation,
        followUserLocation,
        stopFollowUserLocation,
    } = useGeolocation();

    const mapViewRef = useRef<MapView>();

    //flag para indicar si tengo que seguir o no al usuario
    const followingFlagRef = useRef<boolean>(true);

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();
        followingFlagRef.current = true;
        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude,
            },
        });
    };

    //le comienza a dar seguimiento a la posicion ni bien se abre la app
    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation();
        };
    }, []);

    //cada vez que cambia la posicion del usuario, la camara se vuelve a centrar
    //pero solo si el flag indica que hay que centrarlo
    useEffect(() => {
        if (!followingFlagRef.current) { return; }

        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude,
            },
        });
    }, [userLocation]);

    return (
        <>
            {
                hasLocation ?
                    <>
                        <MapView
                            //si bien puede ser null, yo le estoy especificando con el renderizado condicional, que renderice el mapa cuando hay location por eso puedo forzar acá
                            ref={(el) => { mapViewRef.current = el!; }}
                            showsUserLocation
                            style={styles.map}
                            region={{
                                latitude: initialPosition?.latitude,
                                longitude: initialPosition?.longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            //apenas draggeo el map, le indico que deje de seguir al usuario
                            onTouchStart={() => { followingFlagRef.current = false; }}
                        >
                            {/* Marker para mostrar lugares especiales dentro del mapa */}
                            <Marker
                                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                title="Marker 1"
                                description="La primera marca de mapa implementada"
                                image={require('../assets/custommarker-220620-125219.png')}
                            />
                        </MapView >
                        <Fab
                            iconName="compass-outline"
                            onPress={centerPosition}
                            style={{
                                position: 'absolute',
                                bottom: 20,
                                right: 20,
                            }}
                        />
                    </> :
                    <Loading />
            }
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
