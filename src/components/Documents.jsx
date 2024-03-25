import React from 'react'
import ChooseFile from './ChooseFile'
import Files from './Files'
import { IoIosSend } from "react-icons/io";
const Documents = () => {
    return (
        <div className='mt-10 flex flex-col gap-8 ' >
            <h2 className='text-xl'>Resminamalar</h2>
            <div className=' bg-slate-100 rounded-md   '>
                <div className='p-4 flex gap-10'>
                    <ChooseFile />
                    <Files />
                </div>

            </div>
            <div className='flex items-center justify-center mb-8'>
                <button className='bg-blue-500 py-2 flex items-center gap-2 text-white rounded-md px-10'>
                    Ugrat
                    <IoIosSend />
                </button>

            </div>
        </div>
    )
}

export default Documents
