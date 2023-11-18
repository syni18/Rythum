"use client";

import { useRouter } from "next/router";

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
        
    }
    return(
        <div>
            List Item
        </div>
    )
}