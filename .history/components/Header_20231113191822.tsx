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
            className={twMerge(`
                h-fit
                bg-gradient-800
                from-emral
            `)}
        >
            
        </div>
    )
}

export default Header;