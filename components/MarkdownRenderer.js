import React from 'react';
import marked from 'marked';
import fs from 'fs';
import path from 'path';

const MarkdownRenderer = ({ content }) => {
  const renderer = new marked.Renderer();

  return (
    <div dangerouslySetInnerHTML={{ __html: marked(content, { renderer }) }} />
  );
};

export default MarkdownRenderer;
