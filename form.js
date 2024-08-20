const form = document.getElementById("mortgage-form");
const clearButton = document.getElementById("clear-form");
const monthlyFigure = document.querySelector(".result-monthly-figure");
const totalFigure = document.querySelector(".result-total-figure");
const resultEmpty = document.querySelector(".result-empty");
const resultComplete = document.querySelector(".result-complete");

clearButton.addEventListener("click", () => {
  form.reset();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const mortgageAmount = document.getElementById("mortgage-amount-input").value;
  const mortgageTerm = document.getElementById("mortgage-term-input").value;
  const mortageRate = document.getElementById("mortgage-rate-input").value;
  const mortgageType = document.querySelector(
    'input[name="mortgageType"]:checked',
  ).value;

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
    .then((data) => {
      console.log(data);
      monthlyFigure.textContent = `£${data.monthlyPayment}`;
      totalFigure.textContent = `£${data.totalPayment}`;
      form.reset();
      resultEmpty.style.display = "none";
      resultComplete.style.display = "block";
    })
    .catch((err) => console.error("Error", err));
});
