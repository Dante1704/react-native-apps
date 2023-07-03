import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

//la forma facil de tipar los params de la ruta
/* interface RouterParams {
    id: number,
    nombre: string
} */

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {

}

export const PersonaScreen = ({ route, navigation }: Props) => {
    /*     console.log(JSON.stringify(props, null)); */
    /* const params = route.params as RouterParams;*/
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            // title: params!.nombre,  ! sirve para decirle a ts que no se queje porque sea any
            title: params.nombre,
        });
    }, [navigation, params]);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {JSON.stringify(params, null, 3)}
            </Text>
        </View>
    );
};
