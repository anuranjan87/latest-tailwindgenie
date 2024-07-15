"use client";
import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
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
import Screenfull from '../components/screenfull';

import { useAssistant } from "ai/react";
import OpenAI from 'openai';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';




interface Message {
  content: string;
  role: string;
}

function removeBlankLines(text: string): string {
  const lines = text.split("\n");
  const filteredLines = lines.filter(line => line.trim() !== "");
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

const MyPage: React.FC = () => {
  const codeRef = useRef<HTMLPreElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [selectedModel, setSelectedModel] = useState('ft:gpt-3.5-turbo-0613:personal::8LTsgSSu');
  const [scontent, setScontent] = useState('tailwind code only return html code no copy response for requested element in this for mat href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n<button class="bg-blue-500 text-white font-bold border border-black px-4 py-2 rounded">Buy Now</button>');
  const [Open, setOpen] = useState(false);
  const [Oopen, setOopen] = useState(false);

  const [screen, setScreen] = useState(false);
  const [vectorStoreId, setVectorStoreId] = useState<string | null>(null);
  const [threadId, setThreadId] = useState<string | undefined>(undefined);
  const [iframeWidth, setIframeWidth] = useState('100%');
  const [toggle, setToggle] = useState(false);


  const handleChangeWidth = () => {
    setIframeWidth('70%');
  };
  const handleChangeWidthd = () => {
    setIframeWidth('100%');
  };

  const fullscreen = () => {
    setOopen(true);
  };

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
    "Netflix landing page clone",
    "Google search page",
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
    console.log("Vector Store ID received:");
  };

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
        console.log(data.threadId);
      } catch (error) {
        console.error('Error creating thread:', error);
      }
    };

    createThread();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);


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
                    />
                  ) : (
                    <Image
                      src="/shooketh.gif"
                      alt="Shakespeare"
                      width={36}
                      height={36}
                    />
                  )}
                </div>
                <div className="flex-1 px-1 ml-4 overflow-hidden">
                  <div>
                    {message.role === "user" ? (
                      <>{message.content}</>
                    ) : (
                      <>
                        {Oopen && <Screenfull onClose={() => { setOopen(false) }} onVectorStoreCreated={message.content} />}
                        <div className="flex justify-end lg:mr-7 font-extrabold text-xs">
                          <button onClick={fullscreen}>FullScreen</button>
                           
                          
                        </div>
                        
                        <div className="mt-2">
                          <div className=" lg:px-5">
                            <iframe
                              title="Rendered Content"
                              srcDoc={message.content}
                              sandbox="allow-scripts allow-same-origin allow-top-navigation"
                              style={{ width: iframeWidth }}
                              className="{styles.zoom} mx-auto outline-dotted transform scale-100  rounded-xl overflow-x-auto bg:black"
                              onLoad={(e) => {
                                const iframe = e.target as HTMLIFrameElement;
                                iframe.style.height = `${iframe.contentWindow?.document.documentElement.scrollHeight}px`;
                              }}
                            ></iframe>
                          </div>
                        </div>
                        <div className="relative max-w-2xl mx-auto mt-4">
                          <div className="">
                           
                           <button type="button" className="py-1.5 px-4 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100" onClick={()=>setToggle(!toggle)}>{toggle ? "Switch to CSS" : "Switch to React"}</button>


                         
                         
                           <div className="relative max-w-2xl mx-auto mt-2">
    <div className="bg-gray-900 text-white p-4 rounded-xl">
        <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-xs">Code:</span>
            <button className=" bg-gray-800 text-xs hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" onClick={handleCopy}>
        Copy
      </button>
        </div>
        
        <div className="overflow-x-auto">
            <pre ref={codeRef}  className="text-gray-300">
        <code className="text-sm">{toggle ? message.content.replace(/class="/g, 'className="')
        .replace(/<!--/g, '{/*').replace(/-->/g, '*/}')
        .replace(/<link href="https:\/\/cdn\.jsdelivr\.net\/npm\/tailwindcss@2\.2\.19\/dist\/tailwind\.min\.css" rel="stylesheet">/g, '') : message.content}
          </code>

</pre>
        </div>
    </div>
</div>


                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="border-gray-200 sm:mx-0 mx-5 mt-16 lg:mt-6 max-w-screen-sm shadow-md rounded-md border sm:w-full">
            <div className="flex flex-col space-y-3 p-0 sm:p-10">
              <div className="mb-0">
                <a href="https://ibb.co/zFvz1FN">
                  <img src="https://i.ibb.co/xYTNyY3/New-Project.png" alt="New-Project" className="w-72 mx-auto transition-opacity duration-300 hover:opacity-80" />
                </a>
              </div>
              <p className="px-4 md:text-base text-center leading-tight">Create elegant and sophisticated components<br />in just few prompts</p>
              <div className="mx-auto">
                <Image src="/jas.gif" width="160" height="160" alt="jis" className="giphy-embed mt-0" />
              </div>
              <div className="flex flex-col justify-center items-center space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
                {examples.map((example, i) => (
                  <a key={i} className="relative w-full" href="#">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-600"></span>
                    <button
                      ref={buttonRef}
                      key={i}
                      className="py-2 px-4 max-full flex justify-center items-center relative inline-block h-full w-full rounded border-2 border-gray-600 bg-white px-3 py-1 leading-tight lg:text-base lg:font-semibold transition duration-100 hover:bg-[#FFB6C1] hover:text-gray-600"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        buttonRef.current?.click();
                        setTimeout(() => buttonRef.current?.click(), 400);

                        let modifiedExample = example;
                        if (example === "Sign out button") {
                          modifiedExample = "Sign out button";
                        } else if (example === "Netflix landing page clone") {
                          modifiedExample = "Clone netflix landing page";
                        } else if (example === "Google search page") {
                          modifiedExample = "Google search page clone";
                        }
                        setInput(modifiedExample);
                        inputRef.current?.focus();
                        submitMessage();
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
        <div className="fixed bottom-0 flex w-full lg:w-7/12 flex-col items-center p-1 rounded-xl group-hover:opacity-100 transition duration-1 group-hover:duration-200 sm:px-0">
          <form
            ref={formRef}
            onSubmit={(e) => { e.preventDefault(); handlePromptSubmit(); submitMessage(e); }}
            className="relative w-full max-w-screen-md rounded-xl border-2 border-black bg-white px-4 py-auto pb-2 pt-3 sm:pb-3 sm:pt-4"
          >
            <div className="mx-4">
              <button onClick={handleopen} className="absolute inset-y-0 left-3 my-auto flex h- w-4 items-center justify-center rounded-md hover:opacity-50 transition-all text-white">
                <Image src="/nsx.png" alt="NSX Logo" width={30} height={30} />
              </button>
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
                className="w-full mx-3 text-sm focus:outline-none"
              />
              <button
                className={clsx(
                  "absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all",
                  disabled ? "cursor-not-allowed bg-white" : "bg-fuchsia-400 hover:bg-fuchsia-600",
                )}
                disabled={disabled}
                onClick={(e) => { e.preventDefault(); submitMessage(); }}
              >
                {status == "in_progress" ? (
                  <LoadingCircle />
                ) : (
                  <SendIcon className={clsx("h-4 w-4", input.length === 0 ? "text-gray-300" : "text-white")} />
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default MyPage;
