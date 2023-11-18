import React from "react";

interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React = ()=> {
    return (
        <div>
            Hello header!
        </div>
    )
}

export default Header;