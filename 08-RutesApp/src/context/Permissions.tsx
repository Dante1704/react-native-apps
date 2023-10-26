import React, { useState } from 'react';
import { createContext } from 'react';
import { PermissionStatus } from 'react-native-permissions';

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
    const askLocationPermission = () => { };
    const checkLocationPermission = () => { };

    return (
        <PermissionsContext.Provider
            value={{ permissions, askLocationPermission, checkLocationPermission }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};
