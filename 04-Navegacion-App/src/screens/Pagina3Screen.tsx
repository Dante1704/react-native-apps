import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';



interface Props extends StackScreenProps<any, any> {

}
export const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View>
            <Text>Pagina3Screen</Text>
            <Button
                title="Regresar"
                onPress={() => navigation.pop()} //una para atras, quitando una del stack
            />
            <Button
                title="Ir a Pagina 1"
                onPress={() => navigation.popToTop()} //va a la primera quitando todo el stack
            />
        </View>
    );
};
