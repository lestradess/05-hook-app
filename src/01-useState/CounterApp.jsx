import React, { useState } from 'react'

export const CounterApp = () => {
    const [ counter, setCounter ] = useState({
        c1: 10,
        c2: 20,
        c3: 30,
    });
    const { c1, c2, c3 } = counter;
    return (
        <>
            <h1>CounterApp: { c1 }</h1>
            <h1>CounterApp: { c2 }</h1>
            <h1>CounterApp: { c3 }</h1>
            <hr />
            <button
                className='btn btn-success'
                onClick={ () => setCounter({
                    ...counter,
                    c1: c1 + 1,
                })
                }
            >+1</button>
        </>
    )
}
