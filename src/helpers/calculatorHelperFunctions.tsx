import {
  InterestPaidTypes,
  TermDepositCalculatorInput,
} from "../components/TermDepositCalculator/types";

// method to determine the interest frequency and investment term
// InvestTerm is always in months
// determine the interestOccurancesPerYear by dividing the Investment term by the number of times in occurs in a year
// determine the interestOccurancesPerInvestmentTerm by dividing the InterestFrequency by the number of times in occurs in a month

const determineCalculatorData = (
  interestFrequency: InterestPaidTypes,
  investmentTerm: number
): {
  interestOccurancesPerYear: number;
  interestOccurancesPerInvestmentTerm: number;
} | null => {
  switch (interestFrequency) {
    case InterestPaidTypes.Monthly:
      return {
        interestOccurancesPerYear: 12,
        interestOccurancesPerInvestmentTerm: investmentTerm,
      };
    case InterestPaidTypes.Quarterly:
      return {
        interestOccurancesPerYear: 4,
        interestOccurancesPerInvestmentTerm: investmentTerm / 4,
      };
    case InterestPaidTypes.Annually:
      return {
        interestOccurancesPerYear: 1,
        interestOccurancesPerInvestmentTerm: investmentTerm / 12,
      };
    default:
      return null;
  }
};

export const calculateFinalBalance = ({
  startDeposit,
  interestRate,
  interestPaid,
  investmentTerm,
}: TermDepositCalculatorInput) => {
  switch (interestPaid) {
    case InterestPaidTypes.AtMaturity:
      return startDeposit * (1 + ((interestRate / 100) * investmentTerm) / 12);
    default:
      const calculatorData = determineCalculatorData(
        interestPaid,
        investmentTerm
      );
      if (calculatorData) {
        return (
          startDeposit *
          (1 + interestRate / 100 / calculatorData.interestOccurancesPerYear) **
            calculatorData.interestOccurancesPerInvestmentTerm
        );
      }

      return startDeposit;
  }
};
