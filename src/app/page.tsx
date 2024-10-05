"use client";
import Image from "next/image";
import { useState } from "react";

// Import icons
import { IoMdLock } from "react-icons/io";
import { MdEdit } from "react-icons/md";

// Import assets
import AnPerson from "../assets/user.png";

export default function Home() {
  const [nav, setNav] = useState('setup');
  const [list, setList] = useState([
    {
      heading: 'Call opening',
      summary: 'Was the purpose of the calls stated in the beginning?',
      detail1: 'How will this be scored?',
      detail2: 'Did the PST member greet the customer and use the call opening with good energetic tone',
      detail3: 'Did the PST member use the right situation and greeting on the mail?',
    },
    {
      heading: 'Greeting',
      summary: 'Did the salesperson use an appropriate opening greeting?',
      detail1: 'How will this be scored?',
      detail2: 'Did the PST member greet the customer and use the call opening with good energetic tone',
      detail3: 'Did the PST member use the right situation and greeting on the mail?',
    },
    {
      heading: 'Call closing',
      summary: 'Did the salesperson summarized the key points discussed during the call?',
      detail1: 'How will this be scored?',
      detail2: 'Did the PST member greet the customer and use the call opening with good energetic tone',
      detail3: 'Did the PST member use the right situation and greeting on the mail?',
    },
    {
      heading: 'Confidence',
      summary: 'Did the salesperson appear confident and knowledgable about the product?',
      detail1: 'How will this be scored?',
      detail2: 'Did the PST member greet the customer and use the call opening with good energetic tone',
      detail3: 'Did the PST member use the right situation and greeting on the mail?',
    },
    {
      heading: 'Call opening',
      summary: 'Was the purpose of the calls stated in the beginning?',
      detail1: 'How will this be scored?',
      detail2: 'Did the PST member greet the customer and use the call opening with good energetic tone',
      detail3: 'Did the PST member use the right situation and greeting on the mail?',
    }
  ]);

  return (
    <main className="w-[53vw]">
      <h4 className="text-3xl font-bold text-[#253386]">Analyze the calls for soft skills coaching</h4>

      <div className="flex flex-col my-4 gap-2 text-[#253386]">
        <DescriptiveList text="How does it works?" explain="Upload calls from your computer or from Google Drive" />
        <DescriptiveList text="When should you use this?" explain="Upload calls from your computer or from Google Drive" />
      </div>

      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 px-8">
        <nav>
          <ul className="flex flex-row gap-6 cursor-pointer">
            <li className={`font-semibold ${nav === 'setup' ? 'border-b-4 border-violet-600 text-[#253386]' : 'text-slate-500'}`} onClick={() => setNav('setup')}>Setup</li>
            <li className={`font-semibold ${nav === 'sampleoutput' ? 'border-b-4 border-violet-600 text-[#253386]' : 'text-slate-500'}`} onClick={() => setNav('sampleoutput')}>Sample Output</li>
          </ul>
        </nav>

        <section className="border-[1px] rounded-2xl p-4 flex flex-col gap-4 divide-y-2 h-[55vh] overflow-y-scroll">
          {list.map((item, index) => (
            <ListItems
              key={index}
              heading={item.heading}
              summary={item.summary}
              detail1={item.detail1}
              detail2={item.detail2}
              detail3={item.detail3}
            />
          ))}
        </section>
      </div>
    </main>
  );
}


// Define interfaces
interface DescriptiveListProps {
  text: string;
  explain: string;
}

interface ListItemsProps {
  heading: string;
  summary: string;
  detail1: string;
  detail2: string;
  detail3: string;
}

// Create components
const DescriptiveList: React.FC<DescriptiveListProps> = ({ text, explain }) => {
  return (
    <div className="flex flex-col">
      <details>
        <summary className="font-bold">{text}</summary>
        <p className="text-gray-600">{explain}</p>
      </details>
    </div>
  );
};

const ListItems: React.FC<ListItemsProps> = ({ heading, summary, detail1, detail2, detail3 }) => {
  return (
    <div className="py-4 flex flex-col gap-2">
      <div className="flex flex-row gap-3 text-sm font-bold items-center mb-2 text-[#253386]">
        <Image
          src={AnPerson.src}
          alt="An Person"
          width={25}
          height={25}
          className="rounded-full bg-blue-100 p-[0.3rem] w-5 h-5"
        />
        {heading}
      </div>
      <details className="px-1">
        <summary className="font-semibold">{summary}</summary>
        <div className="px-4">
          <p className="text-slate-400 my-2 font-semibold">{detail1}</p>
          <div className="border-2 rounded-2xl p-4">
            <button type="button" className="relative left-[35rem] top-[-0.5rem] z-10 text-blue-700 px-2 py-[0.1rem] bg-blue-50 border-2 border-slate-300 font-medium rounded-lg text-sm flex flex-row items-center gap-1"><MdEdit /> Edit</button>
            <h6 className="flex flex-row text-neutral-500 font-semibold text-sm items-center gap-4 mb-[0.25rem] mt-[-2rem]">{summary} <IoMdLock /></h6>
            <p className="text-[#253386] text-sm">{detail2}</p>
            <p className="text-[#253386] text-sm">{detail3}</p>
          </div>
        </div>
      </details>
    </div>
  );
}