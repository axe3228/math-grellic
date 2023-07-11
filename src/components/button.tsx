import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode,
  classname?: string,
  paddingSize?: string
}

export const Button = ({ children, classname, paddingSize = 'py-3 px-6 ', ...otherProps }: ButtonProps) => {
  return (
    <button className={`bg-light-coral-150 rounded-lg hover:bg-light-coral-200
        text-white drop-shadow-lg btn-text-sm-bold ${classname} ${paddingSize}`} {...otherProps}>
      {children}
    </button>
  )
}