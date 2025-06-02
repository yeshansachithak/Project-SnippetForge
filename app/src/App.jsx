import {useState} from 'react';
import {Link} from 'react-router-dom';
import snippetsData from './data/snippets';
import {ErrorBoundary} from './components/ErrorBoundary';
import Sidebar from './components/Sidebar';
import {FiMenu, FiArrowRight} from 'react-icons/fi';

export default function App() {
    const [search, setSearch] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Inside your App component:
    const allConcepts = Array.from(
        new Set(snippetsData.flatMap(s => s.keyConcepts))
    ).sort();

    const [activeConcept, setActiveConcept] = useState(null);

    // Filter logic
    const filteredSnippets = snippetsData.filter(snippet =>
        snippet.title.toLowerCase().includes(search.toLowerCase()) && (!activeConcept || snippet.keyConcepts.includes(activeConcept))
    );

    return (
        <div className="relative">
            {/* Global Sticky Header */}
            <div
                className="fixed top-0 left-0 w-full z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm px-4 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <Link to="/" className="inline-block group">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-[length:200%_200%] animate-gradient">
                                SnippetForge
                            </h1>
                        </Link>
                        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-wide">
                            Tutorials&nbsp;&nbsp;|&nbsp;&nbsp;Snippet&nbsp;&nbsp;|&nbsp;&nbsp;Blog
                        </p>
                    </div>

                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Search snippets..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        />
                    </div>

                    <div className="flex gap-2 mb-1 overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
                        {allConcepts.map(concept => (
                            <button
                                key={concept}
                                onClick={() => setActiveConcept(c => c === concept ? null : concept)}
                                className={`text-xs px-3 py-1 rounded-full border transition shrink-0 ${
                                    activeConcept === concept
                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700'
                                }`}
                            >
                                {concept}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setActiveConcept(null)}
                        disabled={!activeConcept}
                        className={`w-full text-xs px-3 py-1 rounded-full border shrink-0 transition ${
                            activeConcept
                                ? 'bg-red-500 text-white border-red-600'
                                : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400 border-zinc-300 dark:border-zinc-700 cursor-not-allowed'
                        }`}
                    >
                        Clear Filter
                    </button>

                </div>
            </div>

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="fixed top-5 right-5 sm:hidden bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
            >
                <FiMenu size={20}/>
            </button>

            {/* Content below header */}
            <div className="pt-[220px] px-4 max-w-7xl mx-auto">
                <div className="flex flex-row-reverse">
                    {/* Sidebar */}
                    <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen}/>

                    {/* Main Content */}
                    <div className="flex-1 pr-4 mt-4 pt-4">
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
                                            className="inline-flex items-center gap-2 text-sm px-3 py-1 mt-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:border-indigo-400 dark:text-indigo-300 transition"
                                        >
                                            Read More <FiArrowRight />
                                        </Link>
                                    </div>
                                </ErrorBoundary>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
