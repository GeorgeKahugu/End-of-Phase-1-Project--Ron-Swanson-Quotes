function generateRandomQuote() {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(response => response.json())
    .then(data => {
        // Assuming the API returns an array of quotes, select a random quote from the array
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        
        // Display the random quote on the webpage or log it to the console
        console.log(randomQuote);
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
    });
}

// Call the function to generate a random quote
generateRandomQuote();

