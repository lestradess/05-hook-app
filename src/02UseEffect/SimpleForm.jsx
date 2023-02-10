import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'username',
        email: 'email@email.com'
    });
    const { username, email } = formState;
    const onImputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {

        return () => {
            
        };
    }, [ formState ]);



    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onImputChange }
            />
            <input
                type="email"
                className='form-control mt-2'
                placeholder='Email@email.com'
                name='email'
                value={ email }
                onChange={ onImputChange }
            />
            {
                (username === 'username') && <Message />
            }
        </>
    )
}
