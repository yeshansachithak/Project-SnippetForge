import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';

export default function Header({search, setSearch, allConcepts, activeConcept, setActiveConcept, onMenuClick}) {
    return (
        <header
            className="fixed top-0 left-0 w-full z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm px-4 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                {/* Logo and Description */}
                <div className="text-center">
                    <Link to="/" className="inline-block group">
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-[length:200%_200%] animate-gradient">
                            SnippetForge
                        </h1>
                    </Link>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-wide">
                        Tutorials&nbsp;&nbsp;|&nbsp;&nbsp;Snippet&nbsp;&nbsp;|&nbsp;&nbsp;Blog
                    </p>
                </div>

                {/* Search */}
                <div className="mt-3">
                    <input
                        type="text"
                        placeholder="Search snippets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2.5 sm:p-3 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 text-sm sm:text-base"
                    />
                </div>

                {/* Concept Filters */}
                <div
                    className="flex gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap mb-2 overflow-x-auto py-2 scrollbar-hide px-1">
                    {allConcepts.map((concept) => (
                        <button
                            key={concept}
                            onClick={() => setActiveConcept((c) => (c === concept ? null : concept))}
                            className={`text-xs px-3 py-1.5 rounded-full border transition shrink-0 hover:scale-[1.03] ${
                                activeConcept === concept
                                    ? 'bg-indigo-600 text-white border-indigo-600 font-semibold'
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

            {/* Mobile Toggle */}
            <button
                onClick={onMenuClick}
                className="fixed top-4 right-4 sm:hidden bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
            >
                <FiMenu size={20}/>
            </button>
        </header>
    );
}