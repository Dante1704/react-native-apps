import { useRef, useState } from "react"

enum Operadores {
    sumar, restar, multiplicar, dividir
}
export const useCalculadora = () => {
    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setnumeroAnterior] = useState('0')


    //utilizo un useRef para guardar la operacion que seleccione y que perdure cuando se renderice la app por los cambios al setear numeros
    //asi como tambien para que cuando selecciono el operador no se re-renderice la app porque no tiene ningun impacto visual seleccionar el operador
    const ultimaOperacion = useRef<Operadores>()
    const limpiar = () => {
        setNumero('0')
        setnumeroAnterior('0')
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

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1))
        } else {
            setnumeroAnterior(numero)
        }
        setnumeroAnterior(numero)
        setNumero('0')
    }
    const btnDividir = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnSumar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }
    const btnRestar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.restar
    }
    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break
            case Operadores.dividir:
                if (num1 !== 0) {
                    setNumero(`${num2 / num1}`)
                } else {
                    setNumero('No se puede dividir por 0')
                }
                break
        }
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    }
}

