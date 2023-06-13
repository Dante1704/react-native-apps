
const TiposBasicos = () => {

    const nombre = "Fernando"
    const edad = 35
    const estaActivo = false

    const poderes: Array<string> = []


    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? "activo" : "no activo"}
        </>
    )
}

export default TiposBasicos