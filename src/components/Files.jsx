
import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { BiFile } from 'react-icons/bi';
import { AiOutlineFilePdf, AiOutlineFileWord } from 'react-icons/ai';
import useFileStore from '../zustand/fileStore';

const Files = () => {
    const { files } = useFileStore();

    const FileFormat = (filename) => {
        const fileFormat = filename.split('.').pop().toLowerCase();
        if (fileFormat === 'pdf') {
            return <AiOutlineFilePdf size={40} />;
        } else if (fileFormat === 'doc' || fileFormat === 'docx') {
            return <AiOutlineFileWord size={40} />;
        } else {
            return <BiFile size={40} />;
        }
    };

    return (
        <div className='w-1/2 flex flex-col gap-2'>
            {files.map((file, index) => (
                <div className='p-2 bg-white flex rounded-md items-center justify-between' key={index}>
                    <div className='flex items-center gap-2'>
                        {FileFormat(file.name)}
                        <div className=''>
                            <p className='text-sm '>{file.name}</p>
                            <span className='text-sm'>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                    </div>
                    <div>
                        <IoCheckmarkCircleOutline size={20} color='red' />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Files;
