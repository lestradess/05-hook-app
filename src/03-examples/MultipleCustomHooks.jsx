import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);


    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    //https://thesimpsonsquoteapi.glitch.me/quotes?count=2
    const { author, quote } = !!data && data[ 0 ];
    console.log(data)


    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />
            {
                //operador ternario
                // (isLoading)
                //     ? (<div className="alert alert-info text-center">
                //         Loading...
                //     </div>
                //     )
                //     : (
                //         <>
                //             <blockquote className="blockquote text-end">
                //                 <p className="mb-1">{ quote }</p>
                //                 <footer className="blockquote-footer mt-1">{ author }</footer>
                //             </blockquote>
                //             {/* <div className="row justify-content-end">
                //                 <img className="w-25 " src={image}  />
                //             </div> */}
                //         </>
                //     )
            }
            {
                isLoading ? <LoadingQuote /> : <Quote author={ author } quote={ quote } />

            }

            <button
                className="btn btn-primary"
                disambled={ isLoading }
                onClick={ () => increment() }
            >
                Next quote
            </button>

        </>
    )
}
