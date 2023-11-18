interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React.FC<HeaderProps> = ()=> {
    return (
        <div>
            Hello header!
        </div>
    )
}

export default Header;