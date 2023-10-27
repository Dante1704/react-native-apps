import React, { useState } from 'react';
import { createContext } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

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

    const checkLocationPermission = () => { };

    return (
        <PermissionsContext.Provider
            value={{ permissions, askLocationPermission, checkLocationPermission }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};
