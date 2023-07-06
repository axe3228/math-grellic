import { ReactNode } from "react";

export interface ButtonProps{
  children?: ReactNode,
  classname?: string,
  paddingSize?: string
}

export const Button = ({ children, classname, paddingSize = 'py-3 px-6 ' }: ButtonProps) => {
  return (
    <button className={`bg-light-coral-150 rounded-lg 
        text-white drop-shadow-lg btn-text-sm-bold ${classname} ${paddingSize}`}>
      {children}
    </button>
  )
}