import { useEffect, useState } from 'react';
import { Location } from '../interfaces/appInterfaces';
import { getCurrentLocation } from '../helpers/getCurrentLocation';

export const useGeolocation = () => {

    //hasta no saber la ubicacion del usuario, no quiero mostrar el mapa
    const [hasLocation, setHasLocation] = useState(false);

    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    useEffect(() => {
        getCurrentLocation()
            .then((location) => {
                setInitialPosition({
                    latitude: location.latitude,
                    longitude: location.longitude,
                });
                setHasLocation(true);
            })
            .catch(err => {
                console.log(err);
            },);
    }, []);


    return ({
        hasLocation,
        initialPosition,
        getCurrentLocation,
    });
};
