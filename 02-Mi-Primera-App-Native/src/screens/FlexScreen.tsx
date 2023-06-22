import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            {/*             <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja3}>Caja 3</Text>
 */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*      flexDirection: 'row', */ //a diferencia de en web, aca el por defecto es el column
        backgroundColor: '#28C4D9',
        /* justifyContent: 'center', */ //esta en el medio del componente padre, no del screen completo
        alignItems: 'flex-start', //por defecto es stretch
        flexWrap: 'wrap',
    },
    caja1: {
        /* flex: 3, */ //3 + 2 + 1 = 6
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        /* alignSelf: 'center', */
    },
    caja2: {
        /* flex: 2, */ //3 + 2 + 1 = 6
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        /* alignSelf: 'center', */
    },
    caja3: {
        /* flex: 1, */ //3 + 2 + 1 = 6
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
});

export default FlexScreen;
