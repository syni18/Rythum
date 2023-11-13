"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface SidebarProps {
    children:React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
})=>{
    const pathname = usePathname();
    const route = useMemo(()=>[
        {
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    
    ],[pathname]);
    return (
        <div className="flex h-full">
            <div className="hidden md-flex flex-col gap-y-2 bg-black h-full">

            </div>
        </div>
    )
}

export default Sidebar;