import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <View
            style={{ borderBottomWidth: 3, opacity: 0.4, marginVertical: 5, backgroundColor: theme.dividerColor }}
        />
    );
};
