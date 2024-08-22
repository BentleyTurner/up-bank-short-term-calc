import React, { useEffect, useState } from "react";
import { TermDepositCalculatorInput } from "./types";
import { DEFAULT_FORM_VALUES, FORM_FIELD_CONFIGURATION } from "../../constants/config";
import { FormField } from "../FormFields";
import { calculateFinalBalance } from "../../helpers/calculatorHelperFunctions";

export const TermDepositCalculator = () => {
  const [data, setData] = useState<TermDepositCalculatorInput>(DEFAULT_FORM_VALUES);
  const [finalBalance, setFinalBalance] = useState(
    calculateFinalBalance(data)
  );

  const handleFieldsOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
    const { target: { name, value }, } = e;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
  };
  
  useEffect(() => {
    setFinalBalance(calculateFinalBalance(data));
  }, [data]);

  return (
    <div>
      <h1 className="underline font-bold">
        Term deposit calculator
      </h1>
      <form>
        {FORM_FIELD_CONFIGURATION.map((props) => (
          <FormField
            {...props}
            key={props.fieldName}
            currentValue={data[props.fieldName]}
            onChange={handleFieldsOnChange}
          />
        ))}
      </form>
      <div>
            <h2 className="font-bold mt-6">
              Final balance:{" $"}
              {finalBalance}
            </h2>
      </div>
    </div>
  );
};
