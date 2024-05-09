import { ReactNode, ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode,
}

export function Button({children, ...props} : ButtonProps) : React.ReactElement {

  return (
    <button className="border-[1px] rounded-md bg-blue-500 p-2" {...props}>
      {children}
    </button>
  )
  
}