import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    //useSafeAreaInsets me calcula los espacios en los que no se debe mostrar contenido en las 4 direcciones
    const insets = useSafeAreaInsets();

    return (
        //usa de margin todo el espacio que no se debe mostrar contenido, en este caso el margin superior
        //especialmente util para iOS por el notch que tiene en la parte de arriba los mobile apple
        //de esta manera no necesito usar el componente SafeAreaView
        <View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
            <Text style={styles.title}>SettingsScreen</Text>
        </View>
    );
};
