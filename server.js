import express from "express";

const app = express();
const port = 8080;

app.use(express.static("."));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/mortgagestats", (request, response) => {
  const { mortgageAmount, mortgageTerm, mortgageRate, mortgageType } =
    request.body;
  const mortgageStats = {
    loanAmount: mortgageAmount,
    loanTerm: mortgageTerm,
    loanRate: mortgageRate,
    loanType: mortgageType,
  };
  console.log(mortgageStats);
  response.send("Request successful");
});

// Do the keys in the original request body have to match the keys in the destructured object?
//

app.listen(port, () => {
  console.log("We're live");
});
