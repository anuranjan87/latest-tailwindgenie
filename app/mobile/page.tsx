"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useAssistant } from "ai/react";


const Highlight: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { messages, input, setInput, submitMessage, status } = useAssistant({
    api: '/api/chat',
    
  });

  return (
    <div>
      <Head>
        <title>HTML Code Syntax Highlighter</title>
      </Head>
      <h1>HTML Code Syntax Highlighter</h1>
      <pre>
        <code className="language-markup">
{`<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Code Syntax Highlighter</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`}
           </code>
         </pre>
       </div>
     );
   };
export default Highlight;