
document.addEventListener("DOMContentLoaded", function(){
    const quoteElement = document.getElementById("quoteDisplay");
    const generateQuotesButton = document.getElementById("generateQuotes");

    // Add Event listener for Generating Random Quotes
    generateQuotesButton.addEventListener("click", generateRandomQuote);

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
});
