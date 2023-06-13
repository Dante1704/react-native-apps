
import useUsuarios from "../hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes"

const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios()

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={usuario.avatar}
                        alt={usuario.first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }
    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={paginaAnterior}>
                Anteriores
            </button>
            <button
                className="btn btn-primary"
                onClick={paginaSiguiente}>
                Siguientes
            </button>
        </>
    )
}

export default Usuarios