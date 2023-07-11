import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen Effect');
    }, []);

    return (
        <View>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <Icon name="basketball-outline" size={30} color="#900" />
            </Text>
        </View>
    );
};
