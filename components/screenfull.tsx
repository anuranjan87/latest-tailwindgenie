import React, { useState, ChangeEvent } from "react";
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import OpenAI from "openai";
import 'react-toastify/dist/ReactToastify.css';

interface Message {
  id: number;
  text: string;
  timestamp: Date;
}
interface ModalProps {
  onClose: () => void;
  onVectorStoreCreated: string;
}

const Screenfull: React.FC<ModalProps> = ({ onClose, onVectorStoreCreated }) => {
 
  
  
console.log(onVectorStoreCreated)
 

  

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto px-2 py-5 mt-8">
      <div className="relative bg-black rounded-lg w-full h-full py-6">
        <div className="flex justify-between items-center  ">
          <h2 className="text-sm font-semibold"> </h2>
         
            <button className="text-gray-100 hover:text-gray-700 px-5" onClick={onClose}>
              close
            </button>
        
        </div>
        <iframe
  title="Rendered Content"
  srcDoc={onVectorStoreCreated}
  sandbox="allow-scripts allow-same-origin allow-top-navigation"
  className=" w-full h-full aspect-video outline-dashed outline-white  rounded-md  scale-90"
 
></iframe>
         
        </div>
        
      </div>
      
  );
};

export default Screenfull;
