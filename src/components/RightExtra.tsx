"use client";
import Image from "next/image";
import { useState, useRef } from "react";

// Import components
import Taskbar from "./Taskbar";

// Import assets
import uploadIcon from '../assets/cloud-upload.png'
import hubspotIcon from '../assets/hubspotImg.png'

const RightExtra: React.FC = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const driveRef = useRef<HTMLInputElement | null>(null);
    const localRef = useRef<HTMLInputElement | null>(null);

    const handleUploadClick = (text: string) => {
        if (text === 'Upload files from drive') {
            driveRef.current?.click();
        } else {
            localRef.current?.click();
        }
    }

    return (
        <aside>
            <Taskbar />

            <div className="relative top-10 right-8 border-2 px-6 bg-white rounded-3xl py-4">
                <h5 className="text-xl font-bold text-wrap text-[#253386]">Upload Videos, Audio or Transcripts</h5>
                <input type="file" ref={driveRef} className="hidden" />
                <UploadItem text="Upload files from drive" handleUploadClick={handleUploadClick}>
                    <img className="gb_Nd gb_Od" src="//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" srcSet="//ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png 2x ,//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png 1x" alt="" aria-hidden="true" role="presentation" style={{ width: '40px', height: '40px' }} />
                </UploadItem>
                <input type="file" ref={localRef} className="hidden" />
                <UploadItem text="Upload files from this computer" handleUploadClick={handleUploadClick}>
                    <Image
                        height={250}
                        width={250}
                        alt='Local Upload'
                        className="gb_Nd gb_Od"
                        src={uploadIcon.src}
                        style={{ width: '40px', height: '40px' }}
                    />
                </UploadItem>

                <section className="pb-8">
                    <h5 className="text-xl font-bold mt-10 text-[#253386]">Data Integrations</h5>
                    <div className="flex items-center justify-between my-8">
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                src={hubspotIcon.src}
                                alt='Hubspot'
                                height={250}
                                width={250}
                                style={{ width: '40px', height: '40px' }}
                            />
                            <h4 className="text-2xl font-bold text-[#253386]">HubSpot</h4>
                        </div>
                        <h6 className="text-[0.75rem] font-bold px-2 py-[0.25rem] rounded-2xl bg-slate-100 text-slate-400">SRM</h6>
                    </div>

                    <div className="flex flex-col">
                        <CheckBox text="Some data integration I have to ask about" checked={checked1} onChange={() => setChecked1(!checked1)} />
                        <CheckBox text="Some data integration" checked={checked2} onChange={() => setChecked2(!checked2)} />
                    </div>
                </section>
            </div>
            <button type="button" className="relative top-16 right-8 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Generate Report</button>
        </aside>
    )
}

export default RightExtra;



interface UploadItemProps {
    text: string;
    handleUploadClick: (text: string) => void;
    children: React.ReactNode;
}

interface CheckBoxProps {
    text: string;
    checked: boolean;
    onChange: () => void;
}

const UploadItem: React.FC<UploadItemProps> = ({ text, handleUploadClick, children }) => {
    return (
        <div className="flex flex-row items-center gap-4 bg-slate-100 my-4 py-2 px-8 cursor-pointer" onClick={() => handleUploadClick(text)}>
            {children}
            <p className="text-slate-500 font-semibold">{text}</p>
        </div>
    )
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, checked, onChange }) => {
    return (
        <div className="flex items-center mb-4 ml-8 mx-auto">
            <input
                id="default-checkbox"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-bold text-slate-500">{text}</label>
        </div>
    )
}