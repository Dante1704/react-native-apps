import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

//funcion para seguir al usuario mientras se mueve
export const watchUserPosition = (): Promise<Location> => {

    return new Promise((resolve, reject) => {
        Geolocation.watchPosition(
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
                enableHighAccuracy: true,
                distanceFilter: 10,
            }
        );
    });
};
