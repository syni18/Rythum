import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button =forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type
    ...props
},ref )=> {
    return (
        <div>
            Button
        </div>
    )
})

export default Button;