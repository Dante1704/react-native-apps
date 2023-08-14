import React, { useState } from 'react';
import { Switch } from 'react-native-gesture-handler';

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void

}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onChange(!isEnabled);
    };

    return (
        <>
            {/* Switch es un componente que sirve para mostrar o setear algo como habilitado/deshabilitado */}
            <Switch
                trackColor={{ false: '#D9D9DB', true: '#8b81c1' }}
                thumbColor={isEnabled ? '#5856D6' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </>
    );
};
