export enum FormFields {
    startDeposit = "startDeposit",
    interestRate = "interestRate",
    investmentTerm = "investmentTerm",
    interestPaid = "interestPaid",
  }
  
  export enum InterestPaidTypes {
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Annually = "Annually",
    AtMaturity = "AtMaturity",
  }
  
  export type TermDepositCalculatorInput = {
    [FormFields.startDeposit]: number;
    [FormFields.interestRate]: number;
    [FormFields.investmentTerm]: number;
    [FormFields.interestPaid]: InterestPaidTypes;
  };
  