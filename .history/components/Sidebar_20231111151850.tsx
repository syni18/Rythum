"use Client";

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
            active pathname === '/search',
            href
        }
    
    ],[]);
    return (
        <div>
        {children}
        </div>
    )
}

export default Sidebar;