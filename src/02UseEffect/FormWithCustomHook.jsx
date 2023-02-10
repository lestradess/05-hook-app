
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    // const [ formState, setFormState ] = useState({
    //     username: 'username',
    //     email: 'email@email.com',
    //     password:''
    // });
    // const { username, email, password } = formState;
    // const onImputChange = ({ target }) => {
    //     const { name, value } = target;
    //     setFormState({
    //         ...formState,
    //         [ name ]: value
    //     });
    // }
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });
    console.log(formState);


    return (
        <>
            <h1>FormWithCustomHook</h1>
            <hr />
            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="email"
                className='form-control mt-2'
                placeholder='Email@email.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />
            <input
                type="password"
                className='form-control mt-2'
                placeholder='Contraseña'
                name='password'
                value={ password }
                onChange={ onInputChange }
            />
            <button onClick={onResetForm} className="btn btn-primary mt-4">Borrar</button>
        </>
    )
}
