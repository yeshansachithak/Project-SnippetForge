import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

export default function SnippetViewer({ path }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then(setContent);
  }, [path]);

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
}
