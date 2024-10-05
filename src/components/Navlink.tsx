import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

// Writing the interfaces
interface NavlinkProps {
  link: string
}

const Navlink: React.FC<NavlinkProps> = ({ link }) => {
  return (
    <div className='flex flex-row items-center mt-6'>
      <button type="button" className="text-slate-500 bg-gray-200 font-bold rounded-lg text-sm px-2 py-1 pr-4 me-2 flex flex-row items-center gap-2"><IoIosArrowRoundBack className='font-bold' /> Back</button>
      <p className="text-slate-400 ml-4 font-bold text-sm">{link}</p>
    </div>
  )
}

export default Navlink
