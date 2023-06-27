import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'



export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnRestar,
        btnSumar,
        calcular,
        armarNumero,
        btnMultiplicar
    } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {numeroAnterior !== '0' &&
                <Text style={styles.resultadoPequeno}>
                    {numeroAnterior}
                </Text>
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}>
                {numero}
            </Text>
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalc texto="C" color={styles.grisClaro.backgroundColor} accion={limpiar} />
                <BotonCalc texto="+/-" color={styles.grisClaro.backgroundColor} accion={positivoNegativo} />
                <BotonCalc texto="del" color={styles.grisClaro.backgroundColor} accion={btnDelete} />
                <BotonCalc texto="/" color={styles.naranja.backgroundColor} accion={btnDividir} />
            </View>
            {/* #2D2D2D gris oscuro */}
            <View style={styles.fila}>
                <BotonCalc texto="7" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="8" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="9" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="X" color={styles.naranja.backgroundColor} accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="5" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="6" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="-" color={styles.naranja.backgroundColor} accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="2" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="3" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="+" color={styles.naranja.backgroundColor} accion={btnSumar} />
            </View>
            {/* #FF9427  naranja */}
            <View style={styles.fila}>
                {/* si a ancho no le envio nada, asume que es true */}
                <BotonCalc texto="0" color={styles.grisOscuro.backgroundColor} ancho accion={armarNumero} />
                <BotonCalc texto="." color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="=" color={styles.naranja.backgroundColor} accion={calcular} />
            </View>
        </View >
    )
}

