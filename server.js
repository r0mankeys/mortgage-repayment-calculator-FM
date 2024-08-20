import express from "express";
import {
  repaymentMortgageCalc,
  interestOnlyMortgageCalc,
} from "./mortgageCalc.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.static("."));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/mortgagestats", (request, response) => {
  let mortgageStats;
  const { loanAmount, loanTerm, loanRate, loanType } = request.body;
  if (loanType === "repayment") {
    mortgageStats = repaymentMortgageCalc(loanAmount, loanTerm, loanRate);
  } else {
    mortgageStats = interestOnlyMortgageCalc(loanAmount, loanTerm, loanRate);
  }
  response.json(mortgageStats);
});

app.listen(port, () => {
  console.log("We're live");
});
