function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

//generate the quote
function generateQuote(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-theme-selection");
  let apiKey = "433f0fed8cd1a00748o3e6b5ta206078";
  let prompt = `Please generate an inspirationl quote about ${userInput.value}`;
  let context =
    "You are a master at sharing inspirational quotes. Please generate a short inspirational quote. Use the user input at a guideline for the theme.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="fade-in">Creating your personalized quote about ${userInput.value} </div>`;
  axios.get(apiUrl).then(displayQuote);
}
//call the form
let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
