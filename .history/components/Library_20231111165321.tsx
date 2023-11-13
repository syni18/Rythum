"use client";

import {TbPlaylist} from "react-icons/tb";
import {Ai}

const Library = () => {
    const onClick = () => {
        //handle upload later
    };

    return (
        <div className="flex flex-col">
            <div className="flex item-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26}/>
                    <p className="text-neutral-400 font-medium text-md">Your Library</p>
                    <AiOutlinePlus className="text-neutral-400" size={26}/>
                </div>
            </div>
        </div>
    )
}

export default Library;