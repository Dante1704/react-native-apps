import React, { useState } from 'react';
import { Switch, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Switches" />
            {/* Switch es un componente que sirve para mostrar o setear algo como habilitado/deshabilitado */}
            <Switch
                trackColor={{ false: '#D9D9DB', true: '#8b81c1' }}
                thumbColor={isEnabled ? '#5856D6' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};
