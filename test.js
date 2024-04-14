const shareButton=document.getElementById("share");



//  Event listener for sharing a quote
shareButton.addEventListener("click", share);









// Create a function to share a Quote
function share(){
    if(navigator.share){
        const quoteText=quoteElement.textContent.trim();
         if (navigator.share)
            navigator.share({
            title: 'Check out this quote!',
            text:quoteText,
        })
        .then(()=>console.log('Shared Successfully'))
        .catch((error)=>console.error('Error sharing:',error));

        // Else if function for browsers that do not support the API
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