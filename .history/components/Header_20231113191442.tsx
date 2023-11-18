interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React.FC<Header = ()=> {
    return (
        <div>
            Hello header!
        </div>
    )
}

export default Header;