import React from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { Alert, Button, View } from 'react-native';
import { styles } from '../theme/Theme';

export const AlertScreen = () => {

    const showAlert = () => Alert.alert(
        'Este es el titulo de la alerta. Mandatory.',
        'Este es el mensaje de la alerta. Optional', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
        {
            //opcional, para cerrar la alerta cuando toco en otra parte de la pantalla
            //la idea es no ponerlo porque queremos obligar al usuario que elija una opcion
            cancelable: true,
        });

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="AlertScreen" />
            <Button
                title="Mostrar Alerta"
                onPress={showAlert} />
        </View>
    );
};
