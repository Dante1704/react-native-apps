import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {

    const { setFavoriteIcon } = useContext(AuthContext);
    return (
        <TouchableOpacity
            onPress={() => setFavoriteIcon(iconName)}>
            <Icon name={iconName} size={60} color="#ea6015" />
        </TouchableOpacity>
    );
};
