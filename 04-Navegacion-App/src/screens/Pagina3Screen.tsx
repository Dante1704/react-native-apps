import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

// a fin de cuentas me quedo con esta manera y no con el hook useNavigate porque este mismo ocupa mas espacio
// en cambio ya tengo siempre en las props de los componentes que de clare que fueran parte del stacklos metodos propios de la navegacion

interface Props extends StackScreenProps<any, any> {

}
export const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina3Screen</Text>
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
