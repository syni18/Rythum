interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React.FC<HeaderProps> =({
    children
}) => {
    return (
        <div>
            Hello header!
        </div>
    )
}

export default Header;