
import { FormFieldProps, FormFieldCurrentProps } from "./types";

export const FormField: React.FC<FormFieldProps & FormFieldCurrentProps> = ({
  fieldName,
  displayTitle,
  input: { type, value},
  currentValue,
  onChange,
}) => {
  const className = `mx-2 py-2 px-3 bg-red-300 text-center w-60`;
//   const className = `bg-orange-100 text-center`;

  switch (type) {
    case "number":
      return (
        <label className="grid items-center pb-4" key={fieldName}>
          <span className="font-semibold">{displayTitle}</span>
          <div>
            <input
              className={className}
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
        <label className="grid" key={fieldName}>
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
