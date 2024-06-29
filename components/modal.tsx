import React, { useState, ChangeEvent } from "react";
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import OpenAI from "openai";
import 'react-toastify/dist/ReactToastify.css';

interface ModalProps {
  onClose: () => void;
  onVectorStoreCreated: (vectorStoreId: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onVectorStoreCreated }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const originalFile = acceptedFiles[0];
      if (originalFile.name.endsWith('.csv')) {
        const newName = originalFile.name.replace(/\.csv$/, '.html');
        const newFile = new File([originalFile], newName, {
          type: originalFile.type,
          lastModified: originalFile.lastModified,
        });
        setFile(newFile);
      } else {
        setFile(originalFile);
      }
      setUploadStatus(null);
    },
  });

  const [fileId, setFileId] = useState<string>();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleRemoveFile = () => {
    setFile(null);
    setUploadStatus(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('purpose', 'vision');
    formData.append('file', file);

      try {
        const uploadResponse = await fetch('https://api.openai.com/v1/files', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
          body: formData,
        });

      if (uploadResponse.ok) {
        const { id } = await uploadResponse.json();
        setFileId(id);
        console.log(id)
        

       
        setUploadStatus('File uploaded successfully');
        toast.success('File uploaded successfully, close modal and start query', { position: "top-right", autoClose: 2000 });

        onVectorStoreCreated(id);
      } else {
        setUploadStatus('Failed to upload file');
      }
    } catch (error) {
      console.error('Error:', error);
      setUploadStatus('Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="relative bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-semibold">Send picture as attachment</h2>
          {!uploading && (
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>
        <h1 className="text-sm mb-4">Supported file formats: jpeg & png</h1>
        <div className="text-sm p-11" {...getRootProps()} style={{ border: '2px dashed #cccccc', borderRadius: '4px', textAlign: 'center', cursor: 'pointer' }}>
          <input onChange={handleFileChange} {...getInputProps()} />
          {file ? (
            <>
              <p><strong>Selected File:</strong> {file.name}</p>
              {uploadStatus && <p className="text-center text-sm text-gray-700">{uploadStatus}</p>}
            </>
          ) : (
            <p>Drag &apos;n&apos; drop a file here, or click to select files</p>
          )}
        </div>
        <div className="mt-4 flex justify-end gap-x-4">
          {file && <button className="justify-end px-3 py-2 text-sm font-semibold text-gray-900" onClick={handleRemoveFile}>Remove file</button>}
          <button className="px-4 text-sm py-2 bg-red-600 text-white rounded-md mr-2 hover:bg-red-700" onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Modal;
