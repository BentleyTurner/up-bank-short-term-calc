
import { FormFieldProps, FormFieldCurrentProps } from "./types";

export const FormField: React.FC<FormFieldProps & FormFieldCurrentProps> = ({
  fieldName,
  displayTitle,
  input: { type, value, suffix },
  currentValue,
  onChange,
}) => {
  const inputWidth = `max-w-120px`;
  const className = `mx-2 py-2 px-3 bg-orange-100 text-center ${inputWidth}`;

  switch (type) {
    case "number":
      return (
        <label className="grid grid-cols-2 items-center" key={fieldName}>
          <span className="font-semibold">{displayTitle}</span>
          <div>
            <input
              className={className}
              name={fieldName}
              type="number"
              value={currentValue}
              onChange={onChange}
            />
            {suffix && <span>{suffix}</span>}
          </div>
        </label>
      );
    case "select":
      return (
        <label className="grid grid-cols-2 items-center" key={fieldName}>
          <span className="font-semibold">{displayTitle}</span>
          <select
            className={className}
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
