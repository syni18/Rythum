import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button =forwardRef<HTMLButtonElement=> {
    return (
        <div>
            Button
        </div>
    )
}

export default Button;