const quotes = [
    {
        quote: "O, Sunshine! The most precious gold to be found on earth.",
        author: "Roman Payne",
    },
    {
        quote: "Live in the sunshune, swim the sea, drink the wild air",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "To Love and be loved is to feel the sum from both sides",
        author: "David Viscott",
    },
    {
        quote: "Keep your face always toward the sunshie - and shadows will fall behind you.",
        author: "Walt Whitman",
    },
    {
        quote: "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
        author: "Charles Dickens",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;