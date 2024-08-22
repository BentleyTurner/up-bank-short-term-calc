import {
  InterestPaidTypes,
  TermDepositCalculatorInput,
} from "../components/TermDepositCalculator/types";
import { calculateFinalBalance } from "./calculatorHelperFunctions";

type FormFieldMock = {
  calculatorInput: TermDepositCalculatorInput;
  expectedFinalBalance: number;
};

describe("calculatorHelperFunctions ", () => {
  const formFieldMocks: FormFieldMock[] = [
    {
      calculatorInput: {
        startDeposit: 1000,
        interestRate: 5.0,
        interestPaid: InterestPaidTypes.Monthly,
        investmentTerm: 12,
      },
      expectedFinalBalance: 1051,
    },
    {
      calculatorInput: {
        startDeposit: 30000,
        interestRate: 1.5,
        interestPaid: InterestPaidTypes.Quarterly,
        investmentTerm: 15,
      },
      expectedFinalBalance: 30567,
    },
    {
      calculatorInput: {
        startDeposit: 20000,
        interestRate: 4.0,
        interestPaid: InterestPaidTypes.Annually,
        investmentTerm: 24,
      },
      expectedFinalBalance: 21632,
    },
    {
      calculatorInput: {
        startDeposit: 10000,
        interestRate: 3.0,
        interestPaid: InterestPaidTypes.AtMaturity,
        investmentTerm: 60,
      },
      expectedFinalBalance: 11500,
    },
  ];

  formFieldMocks.forEach(({ calculatorInput, expectedFinalBalance }) => {
    it(`given starting balance ${calculatorInput.startDeposit} & interest rate ${calculatorInput.interestRate} & interest Paid ${calculatorInput.interestPaid} & investment term ${calculatorInput.investmentTerm} should calculate a final balance equal to ${expectedFinalBalance}`, () => {
      expect(calculateFinalBalance(calculatorInput)).toBe(expectedFinalBalance);
    });
  });
});
