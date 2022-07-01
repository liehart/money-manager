interface ButtonElement {
  type: "button" | "submit" | "reset" | undefined
  children?: any
  className?: string
  disabled?: boolean
}

const baseClass: string =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

export default function Button({
  type = "button",
  children,
  className = "",
  disabled = false
}: ButtonElement): JSX.Element {
  return (
    <div>
      <button disabled={disabled} className={baseClass + " " + className} type={type}>
        {children}
      </button>
    </div>
  )
}
