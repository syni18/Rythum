"use client";

import {HiHome} from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';
 
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from './Box';
import SidebarItem from './SidebarItem';

interface SidebarProps {
    children:React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
})=>{
    const pathname = usePathname();
    const route = useMemo(()=>[
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    
    ],[pathname]);
    return (
        <div className="flex h-full">
            <div className="hidden md-flex flex-col gap-y-2 bg-black h-full w-[200px] p-2">
                <Box className='flex flex-col gap-y-4 px-5 py-4'>
                    {route.map((item) => {
                        <SidebarItem key={item.label} {...item}/>
                    })}
                </Box>
                <Box className='overflow-y-auto h-full'>
                    Song Library
                </Box>
            </div>
        </div>
    )
}

export default Sidebar;