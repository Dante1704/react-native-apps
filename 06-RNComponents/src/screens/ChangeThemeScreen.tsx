import React from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { Text, View, Pressable } from 'react-native';
import { styles } from '../theme/Theme';

export const ChangeThemeScreen = () => {
    return (
        <View>
            <HeaderTitle title="Change Theme Screen" />
            <Pressable
                style={[styles.pressable, styles.pressableRounded]}
                android_ripple={{ color: '#262561', radius: 58 }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Light / Dark</Text>
            </Pressable>
        </View>
    );
};
