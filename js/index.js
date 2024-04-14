// DOM Content
document.addEventListener("DOMContentLoaded", function () {
    // Const for the 4 buttons
    const quoteElement = document.getElementById("quoteDisplay");
   
    
   

    // Event listener for Generating Random Quotes
    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", generateRandomQuote);

    //  Event listener for liking a quote
    const likeButton = document.getElementById("like");
    likeButton.addEventListener("click", like);

    // Event listener for sharing a quote
    const shareButton = document.getElementById("share");
    shareButton.addEventListener("click", share);


    //  Event listener for downloading a quote
    const quoteDownloadButton = document.getElementById("quoteDownload");
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
    function like() {
        if (quoteElement.children.length > 0) {
            alert("Quote liked!");
        } else {
            alert("No quote to like.");
        }
    }

    // Function for sharing a quote
    function share() {
        // Open dialog for share functionality:

        const dialogElement = document.getElementById("dialog");
        dialogElement.style.display = "inline";

        const dialogCloseButton = document.getElementById("closeDialogBtn");
        dialogCloseButton.addEventListener('click', function() {
            dialogElement.style.display = "none";
        });

        const facebookShareBtn = document.getElementById("faceBookShareBtn");
        facebookShareBtn.addEventListener('click', function() {
            alert("Shared on FaceBook!");
        });

        const whatsappShareBtn = document.getElementById("whatsappShareBtn");
        whatsappShareBtn.addEventListener('click', function() {
            alert("Shared on WhatsApp!");
        });
        
        const instagramShareBtn = document.getElementById("instagramShareBtn");
        instagramShareBtn.addEventListener('click', function() {
            alert("Shared on Instagram!");
        });
        
        const xShareBtn = document.getElementById("xShareBtn");
        xShareBtn.addEventListener('click', function() {
            alert("Shared on X!");
        });

    }

    // Function for downloading a quote
    function quoteDownload() {
        const quoteText = quoteElement.textContent.trim();

        // IF Statement if there is no quote to Download 
        if (quoteText === "") {
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

