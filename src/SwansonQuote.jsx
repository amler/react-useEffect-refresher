import { useState, useEffect } from "react";
const JSON_API_APP = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

export default function SwansonQuote() {
    const [quote , setQuote] = useState('');
    useEffect(() => {
        fetchQuote();
    } ,[]);
    async function fetchQuote() {
        const response = await fetch(JSON_API_APP);
        const [jsonResponse] = await response.json();
        setQuote(jsonResponse);
    }

    return (
        <>
            <figure>
                <blockquote>
                    {quote}
                </blockquote>
                <figcaption>
                    Ron Swanson, <cite>Parks & Rec</cite>
                </figcaption>
            </figure>
            <button onClick={fetchQuote}>More Ron Wisdom</button>
        </>
    );
}