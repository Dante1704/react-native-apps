import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation /* useTheme  */ } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { theme } = useContext(ThemeContext);

    //cuando quiero aplicar los colores de mi custom en distintos componentes, lo traigo con este built-in hook
    //const { colors } = useTheme();

    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={theme.colors.primary}
                    size={23}
                />
                <Text
                    style={{ ...styles.itemText, color: theme.colors.text }}>{menuItem.name}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Icon
                        name={'chevron-forward-outline'}
                        color={theme.colors.primary}
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
