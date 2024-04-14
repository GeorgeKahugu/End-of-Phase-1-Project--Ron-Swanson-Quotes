// DOM Content
document.addEventListener("DOMContentLoaded", function(){
    // Const for the 4 buttons
    const quoteElement = document.getElementById("quoteDisplay");
    const generateQuotesButton = document.getElementById("generateQuotes");
    const likeQuoteButton=document.getElementById("likeQuote");
    const shareButton=document.getElementById("share");
    const quoteDownloadButton = document.getElementById("quoteDownload");
    
    // Event listener for Generating Random Quotes
    generateQuotesButton.addEventListener("click", generateRandomQuote);

    //  Event listener for liking a quote
    likeQuoteButton.addEventListener("click",likeQuote);

    //  Event listener for sharing a quote
    shareButton.addEventListener("click", share);

     //  Event listener for downloading a quote
     quoteDownloadButton.addEventListener("click", quoteDownload);

    // Create a function to fetch from the API
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

// Create a function to like a quote
    function likeQuote(){
        if (quoteElement.children.length>0){

// Build an else if statement
        alert("Quote liked!" );
        } else {
            alert("No quote to like.");
        }
    }

// Create a function to share a Quote
function share(){
    if(navigator.share){
        const quoteText=quoteElement.textContent.trim();
        navigator.share({
            title: 'Check out this quote!',
            text:quoteText,
        })
        .then(()=>console.log('Shared Successfully'))
        .catch((error)=>console.error('Error sharing:',error));

        // Else if function for broswers that do not support the API
    } else {

    const quoteText=quoteElement.textContent.trim();
    navigator.clipboard.writeText(quoteText)
    .then(()=>{
        alert('Quote copied to clipboard!');
    }) 
        .catch((error)=>{
        console.error('Error copying quote:', error)
        alert("Web share API is not supported in this browser.Quote in unable to be shared")
        });


    }
}    

// Function for downloading a quote
function quoteDownload() {
    const quoteText = quoteElement.textContent.trim();
    const blob = new Blob([quoteText], { type: "text/plain" });
    const downloadURL = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadURL;
    a.download = "quote.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadURL);
}



});

