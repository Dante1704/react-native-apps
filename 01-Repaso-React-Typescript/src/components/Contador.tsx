import { useState } from "react"


const Contador = () => {
    const [valor, setvalor] = useState(10)
    const acumular = (numero: number) => {
        setvalor(valor + numero)
    }

    return (
        <>
            <h3>Contador: <small> {valor}</small></h3>
            <button
                className="btn btn-primary"
                onClick={() => acumular(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => acumular(-1)}
            >
                -1
            </button>
        </>
    )
}

export default Contador