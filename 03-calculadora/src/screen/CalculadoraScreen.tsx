import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>
                1,500.00
            </Text>
            <Text style={styles.resultado}>
                1,500.00
            </Text>
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalc texto="C" color={styles.grisClaro.backgroundColor} />
                <BotonCalc texto="+/-" color={styles.grisClaro.backgroundColor} />
                <BotonCalc texto="del" color={styles.grisClaro.backgroundColor} />
                <BotonCalc texto="/" color={styles.naranja.backgroundColor} />
            </View>
            {/* #2D2D2D gris oscuro */}
            <View style={styles.fila}>
                <BotonCalc texto="7" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="8" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="9" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="X" color={styles.naranja.backgroundColor} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="5" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="6" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="-" color={styles.naranja.backgroundColor} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="2" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="3" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="+" color={styles.naranja.backgroundColor} />
            </View>
            {/* #FF9427  naranja */}
            <View style={styles.fila}>

                <BotonCalc texto="0" color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="." color={styles.grisOscuro.backgroundColor} />
                <BotonCalc texto="=" color={styles.naranja.backgroundColor} />
            </View>
        </View >
    )
}

