import express from "express";
import {
  repaymentMortgageCalc,
  interestOnlyMortgageCalc,
} from "./mortgageCalc.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/server", (request, response) => {
  try {
    let mortgageStats;
    const { loanAmount, loanTerm, loanRate, loanType } = request.body;
    if (loanType === "repayment") {
      mortgageStats = repaymentMortgageCalc(loanAmount, loanTerm, loanRate);
    } else {
      mortgageStats = interestOnlyMortgageCalc(loanAmount, loanTerm, loanRate);
    }
    response.json(mortgageStats);
  } catch (error) {
    console.error("Error processing request", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
