const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


let apiQuotes = [];

//SHow new quote
function newQuote() {
    // Pick new quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check null author and replace with unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    }
    else {
        authorText.textContent = quote.author;
    }
    // Check quote lenght
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    }
    else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}
// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const responce = await fetch(apiUrl)
        apiQuotes = await responce.json();
        newQuote();
    } catch (error) {
        
        // Catch Error Here
    }
}

// Tweet a Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)
//On Load
getQuotes();