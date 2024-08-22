import { FormFieldProps } from "../components/FormFields/types";
import { FormFields, InterestPaidTypes } from "../components/TermDepositCalculator/types";

export const DEFAULT_FORM_VALUES = {
  [FormFields.startDeposit]: 10000,
  [FormFields.interestRate]: 1.1,
  [FormFields.investmentTerm]: 36,
  [FormFields.interestPaid]: InterestPaidTypes.Monthly,
};

export const FORM_FIELD_CONFIGURATION: FormFieldProps[] = [
  {
    fieldName: FormFields.startDeposit,
    displayTitle: "Start Deposit",
    input: {
      type: "number",
      value: {
        default: DEFAULT_FORM_VALUES[FormFields.startDeposit],
      },
    },
  },
  {
    fieldName: FormFields.interestRate,
    displayTitle: "Interest rate",
    input: {
      type: "number",
      value: {
        default: DEFAULT_FORM_VALUES[FormFields.interestRate],
      },
    },
  },
  {
    fieldName: FormFields.investmentTerm,
    displayTitle: "Investment term",
    input: {
      type: "number",
      value: {
        default: DEFAULT_FORM_VALUES[FormFields.investmentTerm],
      },
    },
  },
  {
    fieldName: FormFields.interestPaid,
    displayTitle: "Interest paid",
    input: {
      type: "select",
      value: {
        default: DEFAULT_FORM_VALUES[FormFields.interestPaid],
        selectOptions: [
          { name: "Monthly", value: InterestPaidTypes.Monthly },
          { name: "Quarterly", value: InterestPaidTypes.Quarterly },
          { name: "Annually", value: InterestPaidTypes.Annually },
          { name: "At Maturity", value: InterestPaidTypes.AtMaturity },
        ],
      },
    },
  },
];
