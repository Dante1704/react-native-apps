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
                <Icon name="add-circle" size={30} color="#090909" /> {/* los iconos se renderizan dentro de un text */}
                <Icon name="american-football" size={30} color="#ea6015" />
                <Icon name="arrow-forward-circle" size={30} color="#8216e1" />
                <Icon name="beer" size={30} color="#e8bf05" />
                <Icon name="battery-full" size={30} color="#12c36b" />
                <Icon name="camera" size={30} color="#090909" />
                <Icon name="cloud" size={30} color="#797979" />
            </Text>
        </View>
    );
};
