import { useRouter } from "next/router";

interface HeaderProps {
    children: React.ReactNode;
    classname?: string;
}

const Header: React.FC<HeaderProps> =({
    children,
    classname
}) => {
    const router = useRouter();

    const handle
    return (
        <div>
            Hello header!
        </div>
    )
}

export default Header;