"use client";

import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

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
            className={twMerge()}
        >
            
        </div>
    )
}

export default Header;