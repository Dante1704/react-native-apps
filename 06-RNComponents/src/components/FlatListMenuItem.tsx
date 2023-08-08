import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}>
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={'gray'}
                    size={23}
                />
                <Text
                    style={styles.itemText}>{menuItem.name}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Icon
                        name={'chevron-forward-outline'}
                        color={'gray'}
                        size={23}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
        color: 'black',
    },
});
