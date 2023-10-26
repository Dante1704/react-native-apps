import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions';

export const Permissions = () => {

    const checkLocationPermission = async () => {

        let permissionsStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); ////solicito permiso de location iOS
            return permissionsStatus;
        }
        permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); //solicito permiso de location android

        return permissionsStatus;
    };

    return (
        <View style={{
            ...styles.container,
        }}>
            <Text>Permissions Screen</Text>

            <Button
                title="Permiso"
                onPress={() => { checkLocationPermission(); }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
