const getQuoteButton = document.getElementById("quote-button");

// press Button

getQuoteButton.addEventListener("click", function () {
  getQuote();
});

//get Quote

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((quote) => {
      const formattedSentences = quote.quote
        .split(/(?<=[.!?])\s+/)
        .join("<br>");

      document.getElementById("quote-author").innerText = "— " + quote.author;
      document.getElementById("quote-text").innerHTML = formattedSentences;
    });
}
