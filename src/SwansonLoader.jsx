import { useState, useEffect } from "react";
const JSON_API_APP = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

export default function SwansonLoader () {
    const [quote , setQuote] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchQuote() {
            const response = await fetch(JSON_API_APP);
            const [jsonResponse] = await response.json();
            setQuote(jsonResponse);
            setIsLoading(false);
        }
        fetchQuote();
    } ,[]);

    return (
        <>
            { isLoading && <p>Loading...</p> }
            <figure>
                <blockquote>
                    {quote}
                </blockquote>
                <figcaption>
                    Ron Swanson, <cite>Parks & Rec</cite>
                </figcaption>
            </figure>
        </>
    );
}