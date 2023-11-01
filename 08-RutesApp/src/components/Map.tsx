import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


//componente reutilizable de mapa de google
export const Map = () => {
    return (
        <>
            <MapView

                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="Marker 1"
                    description="La primera marca de mapa implementada"
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
