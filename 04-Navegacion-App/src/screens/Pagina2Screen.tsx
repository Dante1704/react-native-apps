import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';




//en lugar de  usar los types de StackScreenProps puedo usar el hook useNavigation

export const Pagina2Screen = () => {
    const navigator = useNavigation();

    useEffect(() => {

        //esto tiene mas peso que el atributo establecido de manera global
        navigator.setOptions({
            title: 'hola mundo',
            //para ios, que aparezca 'back' o 'atras' segun el idioma del telefono
            headerBackTitle: '',
        });
    }, [navigator]);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button
                title="Ir a Pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    );
};
