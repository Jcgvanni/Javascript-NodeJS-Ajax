/******************************************
project 2 - Quote Show
******************************************/


/*** 
 * `quotes` array 
***/
    var quotes = [
        {
            quote: "That which does not kill us makes us stronger.",
            source: "Friedrich Nietzsche",
            citation: "Twilight of the Idols",
            year: "1888"
        },
        {
            quote: "Be yourself, everyone else is already taken.",
            source: "Oscar Wilde",
            citation: "The Picture of Dorian Gray",
            year: "1890"
        },
        {
            quote: "The difference between ordinary and extraordinary is that little extra.",
            source: "Jimmy Johnson",       
        },
        {
            quote: "Believe you can and you’re halfway there.",
            source: "Theodore Roosevelt",
        },
        {
            quote: "Imagination is everything. It is the preview of life’s coming attractions.",
            source: "Albert Einstein",
            year: "1924"
        }             
    ]; 
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    var randomQuotes = Math.floor(Math.random() * (quotes.length -1 ) +1 );
    return quotes[randomQuotes];
    
}   
/***
 * `printQuote` function
***/
function printQuote(){
    let anyQuote = getRandomQuote();
    console.log(anyQuote);
    let ptoHTML1 = "<p class='quote'>"
    + anyQuote.quote 
    +"</p><p class='source'>"
    + anyQuote.source;
    console.log(anyQuote.source);
    if (quotes.citation) {
        ptoHTML1 += "<span class = 'citation'>" 
        + anyQuote.citation +
        "</span>";
        console.log(anyQuote.citation);
    }
    if (quotes.year) {
        ptoHTML1 += "<span class = 'year'>"
        + anyQuote.year +
        "</span>";
        console.log(anyQuote.year);
    }
    ptoHTML1 += "</p>";
    document.getElementById('quote-box').innerHTML = ptoHTML1;
    console.log(ptoHTML1);
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);