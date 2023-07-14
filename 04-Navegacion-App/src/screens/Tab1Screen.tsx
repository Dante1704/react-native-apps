import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen Effect');
    }, []);

    return (
        <View>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName="add-circle" /> {/* los iconos se renderizan dentro de un text */}
                <TouchableIcon iconName="arrow-forward-circle" />
                <TouchableIcon iconName="beer" />
                <TouchableIcon iconName="battery-full" />
                <TouchableIcon iconName="camera" />
                <TouchableIcon iconName="cloud" />
            </Text>
        </View>
    );
};
