/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { AppState, Platform } from 'react-native';
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions';

export interface PermissionsState {
    locationStatus: PermissionStatus
}

export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable',
};

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void,
    checkLocationPermission: () => void
}

export const PermissionsContext = createContext({} as PermissionsContextProps); //todo: qué exporta

export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(permissionsInitState);

    //este useEffect se va a disparar solamente cuando se construye el provider. La app se costruye y destruye rapidamente
    //cuando la cierro y vuelvo a entrar
    //si yo por ejemplo salgo de mi app y por afuera de ella le cambio el permiso,
    //al volver a entrar ya registra ese cambio que hice por fuera

    useEffect(() => {
        //AppState de React Native me devuelve el estado de la aplicacion. Y en base a eso puedo hacer cosas.
        AppState.addEventListener('change', state => {
            if (state !== 'active') { return; }
            checkLocationPermission();
        });
    }, []);


    const askLocationPermission = async () => {
        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); ////solicito permiso de location iOS
            return permissionsStatus;
        }
        permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); //solicito permiso de location android

        setPermissions({ ...permissions, locationStatus: permissionsStatus });
        return permissionsStatus;
    };

    //cada vez que la persona se va de la aplicacion y despues vuelve, tengo que usar esta funcion.
    //Porque pudo haber revocado los permisos
    const checkLocationPermission = async () => {
        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); ////solicito permiso de location iOS
            return permissionsStatus;
        }
        permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); //solicito permiso de location android

        setPermissions({ ...permissions, locationStatus: permissionsStatus });
        return permissionsStatus;
    };




    return (
        <PermissionsContext.Provider
            value={{ permissions, askLocationPermission, checkLocationPermission }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};
