import React from 'react';
import { Text, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Loading</Text>
        </View>
    );
};
