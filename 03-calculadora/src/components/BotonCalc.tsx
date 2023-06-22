import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    texto: string
}

export const BotonCalc = ({ texto }: Props) => {
    return (
        <View style={styles.boton}>
            <Text style={styles.botonTexto}>{texto}</Text>
        </View>
    )
}

