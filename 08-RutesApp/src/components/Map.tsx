import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



//componente reutilizable de mapa de google
export const Map = () => {

    //obtener la coordenada actual del usuario
    //Geolocation.getCurrentPosition(success_cb, error_cb, options);
    Geolocation.getCurrentPosition(
        info => console.log(info),
        err => console.log(err),
        {
            //distanceFilter: cuando se mueva, a que distancia me notifica cuando se mueve
            enableHighAccuracy: true,
        });

    return (
        <>
            <MapView
                showsUserLocation
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {/* Marker para mostrar lugares especiales dentro del mapa */}
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="Marker 1"
                    description="La primera marca de mapa implementada"
                    image={require('../assets/custommarker-220620-125219.png')}
                />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
