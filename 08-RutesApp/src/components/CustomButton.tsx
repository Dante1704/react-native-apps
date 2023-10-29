import React from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}

export const CustomButton = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...style as any,
                ...styles_CustomButton.customButton,
            }}
        >
            <Text style={styles_CustomButton.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles_CustomButton = StyleSheet.create({
    customButton: {
        height: 50,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
