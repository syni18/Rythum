"use client";

import { useRouter } from "next/navigation";
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
                from-emerald-800
                p-6
            `, classname)}
        >   
        </div>
    )
}

export default Header;