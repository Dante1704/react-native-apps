import React from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/Theme';
import { View, TextInput, StyleSheet } from 'react-native';

export const TextInputScreen = () => {
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputScreen" />
            <TextInput
                style={stylesScreen.inputStyle}
            />
        </View>
    );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'black',
    },
});
