import { useEffect, useRef, useState } from 'react';
import { Location } from '../interfaces/appInterfaces';
import { getCurrentLocation } from '../helpers/getCurrentLocation';
import Geolocation from '@react-native-community/geolocation';

export const useGeolocation = () => {

    //hasta no saber la ubicacion del usuario, no quiero mostrar el mapa
    const [hasLocation, setHasLocation] = useState(false);

    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    //se va a actualizar constantemente cuando el usuario se mueva 10 metros
    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    useEffect(() => {
        getCurrentLocation()
            .then((location) => {
                setInitialPosition(location);
                setUserLocation(location);
                setHasLocation(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const watchId = useRef<number>();

    //funcion para seguir al usuario mientras se mueve
    const followUserLocation = () => {
        watchId.current =
            Geolocation  //invokes the success callback whenever the location changes.
                .watchPosition(
                    ({ coords: { latitude, longitude } }) => {
                        setUserLocation({ latitude, longitude });
                    },
                    (err) => {
                        console.log(err);
                    },
                    {
                        enableHighAccuracy: true,
                        distanceFilter: 10, //cada vez que pasen 10 metros me notifica
                    }
                );
    };

    //si muevo el mapa para ver otra cosa, no quiero que automaticamente vuelva a mi location
    const stopFollowUserLocation = () => {
        if (watchId.current) {
            Geolocation.clearWatch(watchId.current);
        }
    };


    return ({
        hasLocation,
        initialPosition,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
    });
};
