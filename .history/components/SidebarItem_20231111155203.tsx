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
        className="">
            Sidebar item
        </Li>
    )
}

export default SidebarItem;