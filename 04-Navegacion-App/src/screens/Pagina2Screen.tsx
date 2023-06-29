import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';


//en lugar de  usar los types de StackScreenProps puedo usar el hook useNavigation


export const Pagina2Screen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina2Screen</Text>
            <Button
                title="Ir a Pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    );
};
