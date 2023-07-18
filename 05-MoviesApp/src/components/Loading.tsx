import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <ActivityIndicator color={'red'} size={100} /> {/* indica que se esta cargando un contenido */}
        </View>
    );
};
