import { IconType } from "react-icons";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem:React.FC = () => {
    return (
        <div>
            Sidebar item
        </div>
    )
}

export default SidebarItem;