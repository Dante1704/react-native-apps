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
            <Button
                title="Ir a Pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Text style={{
                marginVertical: 20,
                fontSize: 20,
            }}>Navegar con Argumentos</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6',
                    }}
                    //en el segundo parametro le mando los params que aparece en las props de PersonaScreen
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro',
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#ff9427',
                    }}
                    //en el segundo parametro le mando los params
                    // que aparece en las props de PersonaScreen
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria',
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
