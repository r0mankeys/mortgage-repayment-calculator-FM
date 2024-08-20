import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.static("."));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/mortgagestats", (request, response) => {
  const { loanAmount, loanTerm, loanRate, loanType } = request.body;
  const mortgageStats = {
    loanAmount,
    loanTerm,
    loanRate,
    loanType,
  };
  response.json(mortgageStats);
});

app.listen(port, () => {
  console.log("We're live");
});
