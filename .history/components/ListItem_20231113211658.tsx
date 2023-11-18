"use client";

import { useRouter } from "next/n";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}
const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href
})=>{
    const router = useRouter();
    const onClick = ()=> {
        router.push(href);
    }
    return(
        <div>
            List Item
        </div>
    )
}

export default ListItem;