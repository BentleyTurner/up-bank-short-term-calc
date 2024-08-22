
import { FormFieldProps, FormFieldCurrentProps } from "./types";

const formInputClassName = `mx-2 py-2 px-3 bg-red-300 text-center w-60`;

export const FormField: React.FC<FormFieldProps & FormFieldCurrentProps> = ({
  fieldName,
  displayTitle,
  input: { type, value},
  currentValue,
  onChange,
}) => {
  switch (type) {
    case "number":
      return (
        <label key={fieldName}>
          <span className="font-semibold">{displayTitle}</span>
          <div>
            <input
              className={formInputClassName}
              name={fieldName}
              type="number"
              value={currentValue}
              onChange={onChange}
            />
          </div>
        </label>
      );
    case "select":
      return (
        <label key={fieldName}>
          <span className="font-semibold">{displayTitle}</span>
          <select
            className={formInputClassName}
            name={fieldName}
            value={currentValue}
            onChange={onChange}
          >
            {value.selectOptions?.map((selectOption) => (
              <option key={selectOption.value} value={selectOption.value}>
                {selectOption.name}
              </option>
            ))}
          </select>
        </label>
      );
    default:
      return null;
  }
};
