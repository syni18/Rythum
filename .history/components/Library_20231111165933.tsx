"use client";

import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";

const Library = () => {
    const onClick = () => {
        //handle upload later
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col item-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26}/>
                    <p className="text-neutral-400 font-medium text-md">Your Library</p>
                </div>
                <AiOutlinePlus className="cursor-pointer text-neutral-400 hover:text-white transition" onClick={onClick} size={20} />
                <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
            </div>
        </div>
    )
}

export default Library;