import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button =forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
},ref )=> {
    return (
        <button type={type}
        title="button"
        className={twMerge(`
            
        `)}>

        </button>
    )
})

export default Button;