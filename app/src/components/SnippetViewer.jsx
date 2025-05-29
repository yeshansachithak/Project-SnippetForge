import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import rehypeSlug from 'rehype-slug';

export default function SnippetViewer({ path }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then(res => res.text())
      .then(setContent);
  }, [path]);

  useEffect(() => {
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(block => {
      const button = document.createElement('button');
      button.innerText = 'Copy';
      button.className = 'absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 text-white rounded';
      button.onclick = () => {
        navigator.clipboard.writeText(block.innerText);
        button.innerText = 'Copied!';
        setTimeout(() => (button.innerText = 'Copy'), 1500);
      };
      const wrapper = block.parentElement;
      wrapper.style.position = 'relative';
      wrapper.appendChild(button);
    });
  }, [content]);

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md rounded-xl p-6 mb-8">
      <div className="prose max-w-none dark:prose-invert">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
        />
      </div>
    </div>
  );
}
