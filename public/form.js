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

  fetch("/api/server", {
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
    .catch((error) => {
      console.error("Error", error);
    });
});

fetch("/api/server", {
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
  .then((response) => response.text()) // Get the raw response as text
  .then((text) => {
    console.log("Raw response:", text); // Log the raw response for debugging
    try {
      const data = JSON.parse(text); // Attempt to parse as JSON
      console.log(data);
      monthlyFigure.textContent = `£${data.monthlyPayment}`;
      totalFigure.textContent = `£${data.totalPayment}`;
      form.reset();
      resultEmpty.style.display = "none";
      resultComplete.style.display = "block";
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  })
  .catch((error) => {
    console.error("Error", error);
  });
