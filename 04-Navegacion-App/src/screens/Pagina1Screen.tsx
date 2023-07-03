import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';



//en las props van a venir las funcionalidades de navegacion y tambien lo que le mando de drilling asique tengo que redefinir las props incluyendo lo de la navegacion
interface Props extends StackScreenProps<any, any> {

}

export const Pagina1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title="Ir a Pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity
                    //en el segundo parametro le mando los params que aparece en las props de PersonaScreen
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro',
                    })}
                >
                    <Text>Navegar con argumentos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    //en el segundo parametro le mando los params
                    // que aparece en las props de PersonaScreen
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria',
                    })}
                >
                    <Text>Navegar con argumentos</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
