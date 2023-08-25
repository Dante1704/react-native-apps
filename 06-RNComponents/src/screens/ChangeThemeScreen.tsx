import React, { useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { Text, /* View, */ Pressable, View } from 'react-native';
import { styles } from '../theme/Theme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
    const { setDarkTheme, setLightTheme } = useContext(ThemeContext);
    return (
        <>
            <HeaderTitle title="Change Theme Screen" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Pressable
                    style={[styles.pressable, styles.pressableRounded]}
                    android_ripple={{ color: '#262561', radius: 58 }}
                    onPress={() => setDarkTheme()}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Dark</Text>
                </Pressable>
                <Pressable
                    style={[styles.pressable, styles.pressableRounded]}
                    android_ripple={{ color: '#262561', radius: 58 }}
                    onPress={() => setLightTheme()}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Light</Text>
                </Pressable>
            </View>
        </>
    );
};
