import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
        //obtener la coordenada actual del usuario
        //Geolocation.getCurrentPosition(success_cb, error_cb, options);
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                });
            },
            err => {
                reject({ err });
            },
            {
                //distanceFilter: cuando se mueva, a que distancia me notifica cuando se mueve
                enableHighAccuracy: true,
            });
    });
};
