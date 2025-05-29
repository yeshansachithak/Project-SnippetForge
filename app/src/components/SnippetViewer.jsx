import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

export default function SnippetViewer({ path }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch ${path}`);
        return res.text();
      })
      .then(setContent)
      .catch(err => {
        console.error('Markdown Load Error:', err.message);
        setError(err.message);
      });
  }, [path]);

  if (error) return <div className="text-red-500">Error loading: {error}</div>;

  return (
    <div className="prose max-w-none dark:prose-invert">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
}
