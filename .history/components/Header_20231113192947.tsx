"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";

interface HeaderProps {
  children: React.ReactNode;
  classname?: string;
}

const Header: React.FC<HeaderProps> = ({ children, classname }) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        `
                h-fit
                bg-gradient-800
                from-emerald-800
                p-6
            `,
        classname
      )}
    >
      <div
        className="w-full
            mb-4
            flex
            item-center
            justify-between"
      >
        <div className="hidden md:flex gap-x-2 item-center">
          <button
            onClick={()=> }
            type="button"
            title="button"
            className="rounded-full bg-black
            flex
            item-centerr
            justify-center
            hover:opacity-75
            transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={()=> router.forward()}
            type="button"
            title="button"
            className="rounded-full bg-black
            flex
            item-centerr
            justify-center
            hover:opacity-75
            transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
