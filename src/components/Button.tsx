import { ReactNode } from "react"

type ButtonProps = {
  children?: ReactNode,
}

export function Button({children, ...props} : ButtonProps) : React.ReactElement {

  return (
    <button className="border-[1px] rounded-md bg-blue-500 p-2" {...props}>
      {children}
    </button>
  )
  
}