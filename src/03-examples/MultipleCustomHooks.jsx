import { useFetch } from '../hooks/useFetch';


export const MultipleCustomHooks = () => {

    const { DataTransfer, isLoading, hasError } = useFetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    //https://api.anhqv-stats.es/api/characters

    console.log({ DataTransfer, isLoading, hasError })
    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />
        </>
    )
}
