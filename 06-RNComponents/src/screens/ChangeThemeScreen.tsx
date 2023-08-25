import React, { useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { Text, View, Pressable } from 'react-native';
import { styles } from '../theme/Theme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
    const { setDarkTheme } = useContext(ThemeContext);
    return (
        <>
            <HeaderTitle title="Change Theme Screen" />
            <Pressable
                style={[styles.pressable, styles.pressableRounded]}
                android_ripple={{ color: '#262561', radius: 58 }}
                onPress={() => setDarkTheme()}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Light / Dark</Text>
            </Pressable>
        </>
    );
};
