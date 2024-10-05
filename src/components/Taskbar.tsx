"use client";
import Image from "next/image";

// Import icons
import { FaSearch , FaRegBell, FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Taskbar: React.FC = () => {
    return (
        <header className="relative top-6 right-8 pr-4 flex flex-row items-center justify-around w-[23vw] gap-[0.3rem] h-[3rem] bg-white text-slate-400 rounded-3xl">
            <form className="flex items-center text-gray-600 pl-3 my-2 bg-slate-100 rounded-3xl ml-[0.5rem]">
                <button type="submit">
                    <FaSearch className="w-3 h-3 mx-2 text-slate-500" />
                </button>
                <input type="search" name="serch" placeholder="Search" className="bg-slate-100 h-8 px-5 pl-2 pr-10 rounded-full w-[10rem] text-sm focus:outline-none" />
            </form>
            <FaRegBell className="w-[5rem] aspect-auto cursor-pointer" />
            <FaMoon className="w-[5rem] aspect-auto cursor-pointer" />
            <IoMdInformationCircleOutline className="w-[5rem] aspect-auto cursor-pointer" />
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9PdRKK6lx8WSJZhBLhJ9VU-WPnARmmI0nA&s"
                alt="Adela Parkson"
                width={25}
                height={25}
                className="rounded-full cursor-pointer"
            />
        </header>
    )
}

export default Taskbar;