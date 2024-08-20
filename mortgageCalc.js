function repaymentMortgageCalc(amount, years, rate) {
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment =
    (amount * monthlyRate) / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  const totalPayment = monthlyPayment * years * 12;
  const totalInterest = totalPayment - amount;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
  };
}

function interestOnlyMortgageCalc(amount, years, rate) {
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = amount * monthlyRate;
  const totalPayment = monthlyPayment * years * 12;
  const totalInterest = totalPayment - amount;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
  };
}

export { repaymentMortgageCalc, interestOnlyMortgageCalc };
