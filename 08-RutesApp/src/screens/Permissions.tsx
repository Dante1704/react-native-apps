import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { PermissionsContext } from '../context/Permissions';

export const Permissions = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext);



    return (
        <View style={{
            ...styles_permissions.container,
        }}>
            <Text>Permissions Screen</Text>

            <Button
                title="Permiso"
                onPress={askLocationPermission}
            />
            <Text>  {JSON.stringify(permissions, null, 5)} </Text>

        </View>
    );
};

const styles_permissions = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
