"use client";
import Head from "next/head";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import {
  VercelIcon,
  GithubIcon,
  LoadingCircle,
  SendIcon,
  UserIcon,
} from './icons';
import Textarea from "react-textarea-autosize";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//*************************************from header*****
import Header from '../components/header';
import Modal from '../components/modal';
import React from 'react';
import  { useAssistant } from "ai/react"
import { useCompletion } from "ai/react"

import OpenAI from 'openai';







function removeBlankLines(text: string) {
  // Split the text into lines
  const lines = text.split("\n");

  // Filter out empty lines (only whitespace)
  const filteredLines = lines.filter(line => line.trim() !== "");

  // Join the filtered lines back into a string
  return filteredLines.join("\n");
}

function copyToClipboard(text: string) {
  const trimmedText = removeBlankLines(text);
  navigator.clipboard.writeText(trimmedText)
    .then(() => console.log("Copied to clipboard"))
    .catch(err => console.error("Error copying to clipboard: ", err));
}

function downloadAsTxtFile(text: string, filename: string) {
  const trimmedText = removeBlankLines(text.trim());
  const blob = new Blob([trimmedText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
//*************************************end header*****
interface Message {
  content: string;
  role: string;
  // You can add other properties here if needed
}



export default function MyPage() {
  const codeRef = useRef<HTMLPreElement>(null); 
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [selectedModel, setSelectedModel] = useState('ft:gpt-3.5-turbo-0613:personal::8LTsgSSu'); // Initial value
  const [scontent, setScontent] = useState('tailwind code only return html code no copy response for requested element in this for mat href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">\n<button class=\"bg-blue-500 text-white font-bold border border-black px-4 py-2 rounded\">Buy Now</button>');
  const [Open, setOpen] = useState(false);
  const [vectorStoreId, setVectorStoreId] = useState<string | null>(null);
  const [threadId, setThreadId] = useState<string | undefined>(undefined);



 



  const { messages, input, setInput, submitMessage, status } = useAssistant({
    api: '/api/chat',
    threadId: threadId,
    body: {
      content: scontent,
      id: vectorStoreId,
    },
  });


  

  const disabled = input.length === 0 || status == 'in_progress';
  const filename = "fine-tune-ai.jsonl";


  


 

  const [content, setContent] = useState(messages.length > 0 ? messages[0].content : '');
  
  console.log(messages)
  
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const editedContent = e.target.textContent || '';
    setContent(editedContent);
  }

  const handleCopy = () => {
    if (codeRef.current) {
      copyToClipboard(codeRef.current.textContent || '');
      toast.success('Copied to clipboard!', { position: "top-right", autoClose: 2000 });
    }
  }

  const handleDownload = () => {
    if (codeRef.current) {
      downloadAsTxtFile(codeRef.current.textContent || '', filename);
    }
  }

  const handlePromptSubmit = () => {
    toast.success('Remember, our genie only understands UI relates requests for the best results', { position: "top-right", autoClose: 4000 });
  }

  const examples = [
    "Sign out button",
    "Hero section for tailwind",
    "Clone facebook news feed",
  ];
  
  const handleopen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setOpen(true);  
  }
  
  const handleclose = () => {
    setOpen(false);  
  }
 

  const handleVectorStoreCreated = (id: string) => {
    setVectorStoreId(id);
    console.log("Vector Store ID received:"); // Added console log for debugging
  };

  console.log(process.env.NEXT_PUBLIC_API_KEY )

  useEffect(() => {
    const createThread = async () => {
      try {
        const response = await fetch('/api/thread', {
          method: 'POST',
        });

        if (!response.ok) {
          throw new Error('Failed to create thread');
        }

        const data = await response.json();
        setThreadId(data.threadId);
        console.log(data.threadId); // Log the new thread ID
        console.log('hello');
      } catch (error) {
        console.error('Error creating thread:', error);
      }
    };

    createThread();
  }, []);
console.log(threadId)
console.log("pp")
  return (
    <>
<ToastContainer />
<Header />

    {Open && <Modal onClose={handleclose} onVectorStoreCreated={handleVectorStoreCreated} />}
    <main className="flex flex-col items-center justify-between pb-40">
       

      {messages.length > 0 ? (
        messages.map((message, i) => (
          <div
            key={i}
            className={clsx(
              "flex w-full items-center justify-center border-b border-gray-200 mt-6 py-8",
              message.role === "user" ? "bg-white" : "bg-white",
            )}
          >
            <div className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
              <div
                className={clsx(
                  message.role === "assistant"
                    ? " px-0 text-white"
                    : " px-0 text-white",
                )}
              >
                {message.role === "user" ? (
                  <Image
                  src="/sw.png"
                  alt="Shakespeare"
                  width={36}
                  height={36}
                  className="border-black border"

                />
                ) : (
                  <Image
                    src="/shooketh.gif"
                    alt="Shakespeare"
                    width={36}
                    height={36}
                    className="border-black border"

                  />
                )}
              </div>

              
              <div className="flex-1 px-1 ml-4 overflow-hidden">
                 
                  {/* Place SyntaxHighlighter outside of MemoizedReactMarkdown */}
                  <div>
      
                  <div>
                  {message.role === "user" ? (<>{message.content}</>
                  
                ) : (
                <>
                 <div className="flex justify-end mb-6 px-6 font-extrabold text-sm">
                 <div className="flex justify-end m-r-auto bg-[#2eb8b8]" id="buttons_container">
  <button className="text-gray-200 px-6 py-2 bg-white text-xl font-mono border-r-2 hover:text-slate-50"
        >
        
    </button>
    <button className="text-gray-200 px-2 py-1 text-m font-mono border-r-2 hover:text-slate-50 "
        >
        MV
    </button>
    <button className="text-gray-200 px-2 py-1 text-m font-mono border-r-2 hover:text-slate-50"
        >
        DV
    </button></div>
                 </div>
  <div className="mt-2">
  <div className="lg:p-6">
  <iframe
  title="Rendered Content"
  srcDoc={message.content}
  sandbox="allow-scripts allow-same-origin allow-top-navigation"
  className="w-full mx-auto outline-dashed mx-0"
  onLoad={(e) => {
    const iframe = e.target as HTMLIFrameElement;
    iframe.style.height = `${iframe.contentWindow?.document.documentElement.scrollHeight}px`;
    iframe.style.width = `${iframe.contentWindow?.document.documentElement.scrollWidth}px`;
  }}
></iframe>
</div>

</div>
<div className="relative max-w-2xl mx-auto mt-4">
    <div className="bg-gray-900 text-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Code: CSS</span>
            <button onClick={handleCopy} className="code  bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
        Copy
      </button>
        </div>
<pre className="bg-gray-900 text-gray-100 p-2 prose prose-p:leading-relaxed mt-1 w-full break-words whitespace-pre-wrap" ref={codeRef}>{message.content}</pre>
</div></div>
</>

                )}

</div>
      
    </div>
                  
                     
                  
                </div>
              </div>
            </div>
              
            
          
        ))
      ) : (
        <div className="border-gray-200sm:mx-0 mx-5 mt-16 max-w-screen-md shadow-md rounded-md border sm:w-full">
          <div className="flex flex-col space-y-3 p-1 sm:p-10">
          <div className="mb-0">
    
    <a href="https://ibb.co/zFvz1FN">
      <img src="https://i.ibb.co/xYTNyY3/New-Project.png" alt="New-Project" className="w-72 mx-auto transition-opacity duration-300 hover:opacity-80" />
    </a>
  </div>
  <p className="text-gray-500 p-4 font-light text-lg text-center">
    Create elegant and sophisticated components<br />in just a few prompts. #DesignLife
  </p>
  <div className="mx-auto">
      <iframe src="https://giphy.com/embed/lPXAITlh8rQZNRLB1l" width="200" height="200"  className="giphy-embed" allowFullScreen></iframe>
    </div>
            <div className="flex flex-col justify-center items-center space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
            
            {examples.map((example, i) => (
              <a key={i} className="relative w-full" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-600"></span>
              <button
                key={i}
                className="py-2 px-4 max-full flex justify-center items-center font-light relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-[#c965c9] hover:text-white"
                onClick={() => {
                  let modifiedExample = example;
        if (example === "Sign out button") {
          modifiedExample = "Sign out button";
        }
        else if (example === "Hero section for tailwind") {
          modifiedExample = "Hero section for tailwind";
        }
        else if (example === "Clone facebook news feed") {
          modifiedExample = "Clone facebook news feed";
        }
                  setInput(modifiedExample);
                  inputRef.current?.focus();
                }}
              >
                {example}
              </button>
              </a>
            ))}
          </div>
          </div>
          
        </div>
      )}
      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0">
        <form
          ref={formRef}
          onSubmit={(e) => { handlePromptSubmit(); submitMessage(e); }}
          className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4"
        >
          <div
            className=" mx-4 "
          >
          <button onClick={handleopen}  className="absolute inset-y-0 left-3 my-auto flex h- w-4 items-center justify-center rounded-md hover:opacity-50 transition-all text-white">
        <Image   src="/nsx.png" alt="NSX Logo" width={50} height={50} />  </button>
          <Textarea
            ref={inputRef}
            tabIndex={0}
            required
            rows={1}
            autoFocus
            placeholder="Create landing page for..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                formRef.current?.requestSubmit();
                e.preventDefault();
              }
            }}
            spellCheck={false}
            className="w-full mx-3 text-m pr-10 focus:outline-none"
          />
          
          <button
            className={clsx(
              "absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all",
              disabled
                ? "cursor-not-allowed bg-white"
                : "bg-green-500 hover:bg-green-600",
            )}
            disabled={disabled}
            onClick={() => submitMessage()}
          >
            {status == "in_progress" ? (
              <LoadingCircle />
            ) : (
              <SendIcon
                className={clsx(
                  "h-4 w-4",
                  input.length === 0 ? "text-gray-300" : "text-white",
                )}
              />
            )}
          </button>
          </div>
        </form>
        
      </div>
    </main>
    </>
  );
}
