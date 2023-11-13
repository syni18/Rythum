import Link from "next/link";
import { IconType } from "react-icons";
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
        `)}>
            Sidebar item
        </Li>
    )
}

export default SidebarItem;