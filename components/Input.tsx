interface InputElement {
  handleChange?: any
  labelText: string
  value?: any
  id: string
  type?: string
  required?: boolean
  customClass?: string
  placeholder?: string
}

const baseClass: string =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

export default function Input({
  handleChange,
  labelText,
  value,
  id,
  type,
  required = false,
  customClass = "",
  placeholder,
}: InputElement): JSX.Element {
  return (
    <div className="my-5">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        type={type}
        required={required}
        className={baseClass + customClass}
        placeholder={placeholder}
      />
    </div>
  )
}
