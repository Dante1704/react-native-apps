import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    texto: string,
    color: string,
    ancho?: boolean,
    accion: (numeroTexto: string) => void // todos los botones van a tener una accion
}

export const BotonCalc = ({ texto, color, ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => accion(texto)}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ancho ? 180 : 80
            }}>
                <Text
                    style={styles.botonTexto}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

