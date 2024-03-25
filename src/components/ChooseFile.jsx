
import React from 'react';
import { ImFolderUpload } from 'react-icons/im';
import useFileStore from '../zustand/fileStore';

const ChooseFile = () => {
  const { addFile } = useFileStore();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => addFile(file)); 
  };

  return (
    <div className='w-1/2'>
      <div className='container mx-auto flex items-center justify-center flex-col bg-white gap-8 py-16'>
        <ImFolderUpload size={80} color='rgb(241 245 249)' />
        <label htmlFor='file-upload' className='py-1 px-4 text-white bg-blue-400 rounded-md cursor-pointer'>
         fayl sayla
        </label>
        <input id='file-upload' type='file' className='hidden' onChange={handleFileChange} multiple />
      </div>
    </div>
  );
};

export default ChooseFile;
