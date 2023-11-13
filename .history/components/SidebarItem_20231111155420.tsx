import Link from "next/link";
import { IconType } from "react-icons";
import {twMerge}
interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem:React.FC<SidebarItemProps> =({
    icon,
    label,
    active,
    href
}) => {
    return (
        <Link href={href}
        className={twMerge(`
        flex
        flex-row
        h-auto
        item-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        `)}>
            Sidebar item
        </Li>
    )
}

export default SidebarItem;