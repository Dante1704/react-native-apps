import useForm from "../hooks/useForm"


const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'test@tast.com',
        password: '123456'
    })

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            <input
                type="text"
                className='form-control mt-2 mb-2'
                placeholder='Password'
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />
            <pre>
                {JSON.stringify(formulario, null, 2)}
            </pre>
        </>
    )
}

export default Formularios