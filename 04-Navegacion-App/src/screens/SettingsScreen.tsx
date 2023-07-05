import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        //usa de margin todo el espacio que no se debe mostrar contenido, en este caso el margin superior
        //especialmente util para iOS
        //de esta manera no necesito usar el componente SafeAreaView
        <View style={{ ...styles.globalMargin, marginTop: insets.top }}>
            <Text>SettingsScreen</Text>
        </View>
    );
};
