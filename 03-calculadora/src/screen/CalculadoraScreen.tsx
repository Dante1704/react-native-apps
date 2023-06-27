import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('100')
    const [numeroAnterior, setnumeroAnterior] = useState('0')

    const limpiar = () => {
        setNumero('0')
    }

    const armarNumero = (numeroTexto: string) => {
        //no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // punto decimal 
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
                //Evaluar si es otro cero, y hay un punto 
            } else if (numeroTexto === '0' && numeroTexto.includes('.')) {
                setNumero(numero + numeroTexto)
                //evaluar si es diferente de cero y no tiene un punto 
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
                //evitar 00000.00
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }
        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDelete = () => {
        //solo queda el cero, no tiene que hacer nada
        if (numero === '0') return
        //solo queda uno mayor que cero
        if (numero.length === 1) {
            return setNumero('0')
        }
        //quedan dos y es un numero negativo pej -6
        if (numero.length === 2 && numero.includes('-')) {
            return setNumero('0')
        }
        setNumero(numero.slice(0, - 1)) //me saca el ultimo siempre
    }


    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>
                {numeroAnterior}
            </Text>
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
                <BotonCalc texto="/" color={styles.naranja.backgroundColor} accion={limpiar} />
            </View>
            {/* #2D2D2D gris oscuro */}
            <View style={styles.fila}>
                <BotonCalc texto="7" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="8" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="9" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="X" color={styles.naranja.backgroundColor} accion={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="5" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="6" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="-" color={styles.naranja.backgroundColor} accion={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="2" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="3" color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="+" color={styles.naranja.backgroundColor} accion={limpiar} />
            </View>
            {/* #FF9427  naranja */}
            <View style={styles.fila}>
                {/* si a ancho no le envio nada, asume que es true */}
                <BotonCalc texto="0" color={styles.grisOscuro.backgroundColor} ancho accion={armarNumero} />
                <BotonCalc texto="." color={styles.grisOscuro.backgroundColor} accion={armarNumero} />
                <BotonCalc texto="=" color={styles.naranja.backgroundColor} accion={limpiar} />
            </View>
        </View >
    )
}

