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

  useEffect(() => {
    const isFormValid = Object.keys(data).every((key) => {
      const inputConfig = FORM_FIELD_CONFIGURATION.find(
        (config) => config.fieldName === key
      );

      if (inputConfig?.input.type === "number") {
        // @ts-ignore 
        return !isNaN(data[key]);
      }
      return true;
    });
    if (isFormValid){
      setFinalBalance(calculateFinalBalance(data));
    }
  }, [data]);

  const handleFieldsOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { target: { name, value }, } = e;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-6 bg-slate-100">
      <h1 className="text-2xl italic py-2 px-3 bg-slate-300">
        Term deposit calculator
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 w-full md:w-3/4">
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
          <>
            <h2 className="text-xl py-2 px-3">
              Final balance:{" $"}
              {finalBalance.toFixed(2)}
            </h2>
          </>
      </div>
    </div>
  );
};
