import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useGeolocation = () => {

    //hasta no saber la ubicacion del usuario, no quiero mostrar el mapa
    const [hasLocation, setHasLocation] = useState(false);

    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        logitude: 0,
    });

    useEffect(() => {
        //obtener la coordenada actual del usuario
        //Geolocation.getCurrentPosition(success_cb, error_cb, options);
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                setInitialPosition({
                    latitude: coords.latitude,
                    logitude: coords.longitude,
                });

                setHasLocation(true);
            },
            err => {
                console.log(err);
            },
            {
                //distanceFilter: cuando se mueva, a que distancia me notifica cuando se mueve
                enableHighAccuracy: true,
            });
    }, []);

    return ({
        hasLocation,
        initialPosition,
    });
};
