import { useState } from "react"



const useCounter = (inicial = 10) => { // le da 10 por default por si no le pasan ninguno
    const [valor, setvalor] = useState(inicial)
    const acumular = (numero: number) => {
        setvalor(valor + numero)
    }
    return {
        valor,
        acumular
    }
}
export default useCounter