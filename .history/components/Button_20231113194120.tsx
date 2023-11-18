import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button =forwardRef=> {
    return (
        <div>
            Button
        </div>
    )
}

export default Button;