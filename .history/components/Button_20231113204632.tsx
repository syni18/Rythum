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
            w-full
            rounded-full
            bg-green-500
            border
            border-transparent
            px-3
            py-3
            disabled:cursor-not-allowed
            disabled:
        `)}>
            {children}

        </button>
    )
})

export default Button;