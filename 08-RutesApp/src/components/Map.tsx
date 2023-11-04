import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useGeolocation } from '../hooks/useGeolocation';
import { Loading } from '../screens/Loading';
import { Fab } from './Fab';




//componente reutilizable de mapa de google
export const Map = () => {

    const { hasLocation, initialPosition } = useGeolocation();

    return (
        <>
            {hasLocation ?
                <>
                    <MapView
                        showsUserLocation
                        style={styles.map}
                        region={{
                            latitude: initialPosition?.latitude,
                            longitude: initialPosition?.logitude,
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
                    <Fab
                        iconName="compass-outline"
                        onPress={() => console.log('FAB')}
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
