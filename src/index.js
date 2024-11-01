function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "It's five o'clock somewhere",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}
let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
