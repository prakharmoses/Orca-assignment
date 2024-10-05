import Link from "next/link";
import Image from "next/image";

// Import icons
import { IoMdHome } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { FaCopy } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center w-[15vw] h-[87vh] my-8 ml-8 border-[0.5px] rounded-2xl">
      <h1 className="text-3xl text-[#253386] font-bold border-b-[0.5px] p-8 w-[15vw] text-center">Orca AI</h1>
      <div className="flex flex-col items-center justify-between h-[70vh]">
        <nav className={`flex flex-col items-start p-4 gap-2 my-4`}>
          <Link href="/" className="bg-white mb-4 flex flex-row items-center text-slate-400 font-bold text-sm"><IoMdHome className="mr-4" /> Home</Link>
          <Link href="/about" className="bg-white mb-4 flex flex-row items-center text-slate-400 font-bold text-sm"><HiTemplate className="mr-4" /> Templates</Link>
          <Link href="/services" className="bg-white mb-4 flex flex-row items-center text-slate-400 font-bold text-sm"><FaCopy className="mr-4" />Reports</Link>
          <Link href="/contact" className="bg-white mb-4 flex flex-row items-center text-slate-400 font-bold text-sm"><AiFillPieChart className="mr-4" />Sales Performance</Link>
        </nav>
        <div className="flex flex-row gap-2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9PdRKK6lx8WSJZhBLhJ9VU-WPnARmmI0nA&s"
            alt="Adela Parkson"
            width={50}
            height={50}
            className="rounded-full border-2"
          />
          <div className="flex flex-col h-[3rem] pt-[0.25rem] box-border">
            <h3 className="text-lg font-bold text-[#253386]">Adela Parkson</h3>
            <p className="text-sm text-slate-400 font-semibold mt-[-0.5rem]">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;