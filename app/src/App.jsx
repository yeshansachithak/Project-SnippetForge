import { useState } from 'react';
import SnippetViewer from './components/SnippetViewer';
import snippetsData from './data/snippets';
import { ErrorBoundary } from './components/ErrorBoundary';
import Sidebar from './components/Sidebar';

export default function App() {
  const [search, setSearch] = useState('');

  const filteredSnippets = snippetsData.filter(snippet =>
    snippet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 flex gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">ReactJS Snippet Tutorials</h1>
        <input
          type="text"
          placeholder="Search snippets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        {filteredSnippets.map(snippet => (
          <div key={snippet.id} id={snippet.slug} className="mb-10 scroll-mt-24">
            <ErrorBoundary>
              <SnippetViewer path={snippet.file} />
            </ErrorBoundary>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
}
