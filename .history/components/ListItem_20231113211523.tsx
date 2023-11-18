"use client";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}
const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    hr
})=>{
    return(
        <div>
            List Item
        </div>
    )
}