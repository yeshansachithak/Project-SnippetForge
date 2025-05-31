import {useState} from 'react';
import {Link} from 'react-router-dom';
import SnippetViewer from './components/SnippetViewer';
import snippetsData from './data/snippets';
import {ErrorBoundary} from './components/ErrorBoundary';
import Sidebar from './components/Sidebar';
import {FiMenu} from 'react-icons/fi';

export default function App() {
    const [search, setSearch] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const filteredSnippets = snippetsData.filter(snippet =>
        snippet.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative max-w-7xl mx-auto px-4 py-6">
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="fixed top-0 right-0 sm:hidden bg-blue-600 hover:bg-blue-700 text-white p-3 square-full shadow-lg z-50"
            >
                <FiMenu size={20}/>
            </button>

            {/* Main layout for desktop */}
            <div className="flex flex-row-reverse">
                {/* Sidebar (only visible on sm+ or as mobile drawer) */}
                <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen}/>

                {/* Main Content */}
                <div className="flex-1 pr-4">
                    <div className="text-center mb-6">
                        <Link to="/" className="inline-block group">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-[length:200%_200%] animate-gradient">
                                SnippetForge
                            </h1>
                        </Link>
                        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-wide">
                            Tutorials&nbsp;&nbsp;|&nbsp;&nbsp;Snippet&nbsp;&nbsp;|&nbsp;&nbsp;Blog
                        </p>
                    </div>

                    <input
                        type="text"
                        placeholder="Search snippets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full mb-6 p-3 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    />

                    {filteredSnippets.map(snippet => (
                        <div key={snippet.id} id={snippet.slug} className="mb-10 scroll-mt-24">
                            <ErrorBoundary>
                                <div
                                    className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md rounded-xl p-6 mb-4">
                                    <p className="text-sm text-zinc-800 dark:text-zinc-200">
                                        <strong>Title:</strong> <code>{snippet.title}</code><br/>
                                        <strong>Summary:</strong> {snippet.summary}<br/>
                                        <strong>Key Concepts:</strong>{' '}
                                        {snippet.keyConcepts.map((concept, i) => (
                                            <code key={i} className="mr-1">{concept}</code>
                                        ))}
                                    </p>
                                    <Link
                                        to={`/tutorial/${snippet.slug}`}
                                        className="text-indigo-500 hover:underline text-sm mt-2 inline-block"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </ErrorBoundary>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
