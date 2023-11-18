"use client";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}
const ListItem: React.FC<ListItemProps> = ({
    ima
})=>{
    return(
        <div>
            List Item
        </div>
    )
}