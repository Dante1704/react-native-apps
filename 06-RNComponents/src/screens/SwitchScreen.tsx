import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const { theme } = useContext(ThemeContext);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Switches" />
            <View>
                <Text style={{ ...styles.switchText, color: theme.colors.text }}>
                    isActive
                </Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View>
                <Text style={{ ...styles.switchText, color: theme.colors.text }}>
                    isHungry
                </Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View>
                <Text style={{ ...styles.switchText, color: theme.colors.text }}>
                    isHappy
                </Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>
            <Text style={{ ...styles.switchText, color: theme.colors.text }}>
                {JSON.stringify(state, null, 1)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 25,
    },
});
