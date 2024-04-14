// DOM Content
document.addEventListener("DOMContentLoaded", function(){
    // Const for the 4 buttons
    const quoteElement = document.getElementById("quoteDisplay");
    const generateButton = document.getElementById("generate");
    const likeButton=document.getElementById("like");
    const shareButton = document.getElementById("share");
    const quoteDownloadButton = document.getElementById("quoteDownload");
    
    // Event listener for Generating Random Quotes
    generateButton.addEventListener("click", generateRandomQuote);

    //  Event listener for liking a quote
    likeButton.addEventListener("click",like);

      // Event listener for sharing a quote
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
    function like(){
        if (quoteElement.children.length>0){

// Build an else if statement
        alert("Quote liked!" );
        } else {
            alert("No quote to like.");
        }
    }

// Function for sharing a quote
function share() {
    if (navigator.share) {
        const quoteText = quoteElement.textContent.trim();
        if (quoteText) {
            navigator.share({
                title: 'Ron Swanson Quote',
                text: quoteText,
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
            alert("No quote to share.");
        }
    } else {
        alert("Web Share API not supported in this browser.");
    }
}

// Function for downloading a quote
function quoteDownload() {
    const quoteText = quoteElement.textContent.trim();

    // IF Statement if there is no quote to Download 
    if(quoteText===""){
        alert("No Quote to Download");
        return;
    }
       

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

