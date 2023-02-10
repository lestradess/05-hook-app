import { useCounter } from '../hooks/useCounter'

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>CounterCustomHook: { counter }</h1>
            <hr />
            <button
                className="btn btn-primary"
                // Gracias a esto podemos incrementar segun el valor que le pasemos
                onClick={ () => increment(3) }
            >+1</button>
            <button
                className="btn btn-danger"
                onClick={ decrement }
            >-1</button>
            <button
                className="btn btn-warning"
                onClick={ reset }
            >Reset</button>
        </>
    )
}
