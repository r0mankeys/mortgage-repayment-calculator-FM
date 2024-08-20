const form = document.getElementById("mortgage-form");

const mortgageAmount = document.getElementById("mortgage-amount-input").value;
const mortgageTerm = document.getElementById("mortgage-term-input").value;
const mortageRate = document.getElementById("mortgage-rate-input").value;
const mortgageType = document.querySelector(
  'input[name="mortgageType"]:checked',
).value;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("/mortgagestats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loanAmount: mortgageAmount,
      loanTerm: mortgageTerm,
      loanRate: mortageRate,
      loanType: mortgageType,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Error", err));
});
