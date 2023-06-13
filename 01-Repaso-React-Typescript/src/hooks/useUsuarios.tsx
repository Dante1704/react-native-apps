import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"


const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
            .then(resp => {
                setUsuarios(resp.data.data)
            })
            .catch(console.log)
    }, [])

    const cargarUsuarios = async () => {
        return await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
    }

    const paginaSiguiente = () => {
        paginaRef.current++
        console.log(paginaRef);

        cargarUsuarios()
            .then(resp => {
                if (resp.data.data.length > 0) {
                    setUsuarios(resp.data.data)
                }
                else {
                    paginaRef.current-- //esto es necesario para que no siga avanzando en la
                    alert('No hay mas registros')
                }
            })
            .catch(console.log)
    }

    const paginaAnterior = () => {

        if (paginaRef.current > 1) {
            paginaRef.current--
            cargarUsuarios()
                .then(resp => {
                    setUsuarios(resp.data.data)

                })
                .catch(console.log)
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}

export default useUsuarios