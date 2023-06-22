import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fab from '../components/Fab';


const ContadorScreen = () => {

    const [contador, setContador] = useState(10);


    return (
        //el view se adapta al contenido hijo, es como el div. Tiene Flex por defecto
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
                position={'br'}
            />
            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position={'bl'}
            />
            {/*  <TouchableOpacity
                style={styles.fabLocationBL}
                //onclick
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};

//usualmente el estilo se coloca al final
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        //por defecto todas las position:relative
        top: -15,
    },
});

export default ContadorScreen;
