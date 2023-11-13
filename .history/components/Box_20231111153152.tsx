interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    className
})=> {
    return (
        <div className={tw}>
            {children}
        </div>
    )
}

export default Box;