// DOM Content
document.addEventListener("DOMContentLoaded", function(){
    const quoteElement = document.getElementById("quoteDisplay");
    const generateQuotesButton = document.getElementById("generateQuotes");
    const likeQuoteButton=document.getElementById("likeQuote")

    // Add Event listener for Generating Random Quotes
    generateQuotesButton.addEventListener("click", generateRandomQuote);

    // Event listener added for liking a quote
    likeQuoteButton.addEventListener("click",likeQuote);

    // function to fetch from the API
    function generateRandomQuote() {
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(response => response.json())
        .then(data => {
           
            quoteElement.innerHTML = "";
        
            
            data.forEach(quote => {
                
                const quoteParagraph = document.createElement("p");

                quoteParagraph.textContent = quote;

             
                quoteElement.appendChild(quoteParagraph);
            });
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
    }

// function to like a quote
    function likeQuote(){
        if (quoteElement.children.length>0){
// else if statement
        alert("Quote liked!" );
        } else {
            alert("No quote to like.");
        }
    }

});


