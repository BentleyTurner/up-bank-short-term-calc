import {
  InterestPaidTypes,
  TermDepositCalculatorInput,
} from "../components/TermDepositCalculator/types";

/**
 * determineCalculatorData: calculate interest frequency and investment term
 * 
 * @param interestFrequency InterestPaidTypes
 * @param investmentTerm total amount of investment term in months
 * @returns
 *   - interestOccurancesPerYear by dividing the Investment term by the number of times in occurs in a year
 *   - interestOccurancesPerInvestmentTerm by dividing the InterestFrequency by the number of times in occurs in a month
 */
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
        interestOccurancesPerInvestmentTerm: investmentTerm / 3,
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
  const interestRatePercentage = interestRate / 100;

  switch (interestPaid) {
    case InterestPaidTypes.AtMaturity:
      return Math.round(startDeposit * (1 + (interestRatePercentage * investmentTerm) / 12));
    default: {
      const calculatorData = determineCalculatorData(interestPaid, investmentTerm);
      
      if (calculatorData) {
        const { interestOccurancesPerYear, interestOccurancesPerInvestmentTerm } = calculatorData;
        return Math.round(startDeposit * Math.pow(1 + interestRatePercentage / interestOccurancesPerYear, interestOccurancesPerInvestmentTerm));        
      }

      return startDeposit;
    }
  }
};
