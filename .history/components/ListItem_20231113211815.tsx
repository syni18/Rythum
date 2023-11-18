"use client";

import { useRouter } from "next/navigation";

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
        <button
            className="
                relative
                group
                flex
                item-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral
            "
        >

        </button>
    )
}

export default ListItem;