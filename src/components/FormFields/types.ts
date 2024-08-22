import { FormFields } from "../TermDepositCalculator/types";

type Option = { name: string; value: string; };

export type FormFieldProps = {
  fieldName: FormFields;
  displayTitle: string;
  input: {
    type: "number" | "select";
    value: {
      default: number | string;
      selectOptions?: Option[];
    };
  };
};

export type FormFieldCurrentProps = {
  currentValue: number | string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
