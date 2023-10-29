import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PermissionsContext } from '../context/Permissions';
import { CustomButton } from '../components/CustomButton';

export const Permissions = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext);



    return (
        <View style={{
            ...styles_permissions.container,
        }}>
            <Text style={styles_permissions.informationGPS}>Es necesario el uso del GPS</Text>

            <CustomButton
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
    informationGPS: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
});
