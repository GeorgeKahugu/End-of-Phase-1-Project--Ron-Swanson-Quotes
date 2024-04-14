// DOM Content
document.addEventListener("DOMContentLoaded", function(){
    const quoteElement = document.getElementById("quoteDisplay");
    const generateQuotesButton = document.getElementById("generateQuotes");
    const likeQuoteButton=document.getElementById("likeQuote");
    const shareButton=document.getElementById("share");
    const downloadButton=document.getElementById("download");
    
    // Add Event listener for Generating Random Quotes
    generateQuotesButton.addEventListener("click", generateRandomQuote);

    // Add Event listener for liking a quote
    likeQuoteButton.addEventListener("click",likeQuote);

    // Add Event listener for sharing a quote
    shareButton.addEventListener("click", share);

    // Event listener for downloading a quote
    downloadButton.addEventListener("click", download);

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

// function to share a Quote
function share(){
    if(navigator.share){
        const quoteText=quoteElement.textContent.trim();
        navigator.share({
            title: 'Check out this quote!',
            text:quoteText,
        })
        .then(()=>console.log('Shared Successfully'))
        .catch((error)=>console.error('Error sharing:',error));
        
    } else {
        alert("Web share API is not supported in this browser.")
    }
}

// share(quoteText);

// function for downloading a quote
function downloadQuote(){
    const quoteText=quoteElement.textContent.trim()
    const blob= new Blob ([quoteText], {type:"text/plain"});
    const URL=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=URL;
    a.download="quote.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(URL);

}

});


