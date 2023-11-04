import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}
//Floating action button para centrar nuevamente la vista en el usuario en el mapa.
//Aunque ya no es necesario crearlo porque google ya lo trae, en el pasado no lo traia y habia que desarrollarlo.
export const Fab = ({ iconName, onPress, style = {} }: Props) => {

    return (
        <View style={{ ...style as any }} >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={stylesFab.blackButton}
            >
                <Icon
                    name={iconName}
                    color="white"
                    size={35}
                />
            </TouchableOpacity>
        </View>
    );
};

const stylesFab = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
});
