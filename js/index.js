document.addEventListener("DOMContentLoaded",function(){
    const quoteElement=document.getElementById("quote");
    const generateQuotesButton=document.getElementById("generateQuotes");

    // Add Eventlistner for Generating Random Quotes
generateQuotesButton.addEventListener("click",generateQuotes);

    // function to fetch from the API
function generateRandomQuote(){
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(Response => Response.json())
    .then(data => {
        if(data.length>0){
            quoteElement.textContent= data[10];
        }
    }) 
        .catch(error=>{
            // console.error('Error fetching quote:', error);
            
        });
}
generateRandomQuote();

});



