"use client";

import { useRouter } from "next/router";

interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React.FC<HeaderProps> =({
    children,
    classname
}) => {
    const router = useRouter();

    const handleLogout = () => {

    }
    return (
        <div
        
        >
            
        </div>
    )
}

export default Header;