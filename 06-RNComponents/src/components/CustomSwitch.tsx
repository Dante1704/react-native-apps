import React, { useContext, useState } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void

}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const { theme } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onChange(!isEnabled);
    };

    return (
        <>
            {/* Switch es un componente que sirve para mostrar o setear algo como habilitado/deshabilitado */}
            <Switch
                trackColor={{ false: '#f4f3f4', true: theme.colors.primary }}
                thumbColor={isEnabled ? theme.colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </>
    );
};
