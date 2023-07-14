import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {
    return (
        <TouchableOpacity>
            <Icon name={iconName} size={60} color="#ea6015" />
        </TouchableOpacity>
    );
};
