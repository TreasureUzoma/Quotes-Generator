import React, { useState } from "react";

function MainContent() {
    const [quote, setQuote] = useState("Tap 'Generate Quote' button to get started");
    const [quoteCount, setQuoteCount] = useState(1);

    const fetchNewQuote = async () => {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            setQuote(data.content); // Update with the new quote
            setQuoteCount(prevCount => prevCount + 1); // Increment the quote count
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };
    return (
        <div className="flex font-poppins justify-center items-center h-[99vh] text-center">
            <div className="bg-white p-4 rounded-lg shadow-md w-[85%] max-w-md">
                <h3 className="text-lg font-semibold text-[#111]">
                    Quote #<span>{quoteCount}</span>
                </h3>
                <p className="text-18px mt-2 font-anonpro">
                    {quote}
                </p>
                <button
                    onClick={fetchNewQuote}
                    className="mt-6 px-4 py-2 bg-[#f9370d] text-white font-bold rounded-md"
                >
                    Generate Quote
                </button>
            </div>
        </div>
    );
}

export default MainContent;
