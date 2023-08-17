import React from 'react';
import { View } from 'react-native';

export const itemSeparator = () => {
    return (
        <View
            style={{ borderBottomWidth: 5, opacity: 0.4, marginVertical: 5 }}
        />
    );
};
