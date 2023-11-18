interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React.FC<HeaderProps> =({
    children,
    classname
}) => {
    const router = useR
    return (
        <div>
            Hello header!
        </div>
    )
}

export default Header;