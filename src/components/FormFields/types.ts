import { FormFields } from "../TermDepositCalculator/types";

export type FormFieldProps = {
  fieldName: FormFields;
  displayTitle: string;
  input: {
    type: "number" | "select";
    value: {
      default: number | string;
      selectOptions?: {
        name: string;
        value: string;
      }[];
    };
  };
};

export type FormFieldCurrentProps = {
  currentValue: number | string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
