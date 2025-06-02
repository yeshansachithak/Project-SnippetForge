import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';

export default function SnippetCard({snippet}) {
    return (
        <div
            className="mt-4 h-full flex flex-col justify-between bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md rounded-xl p-4 sm:p-6 transition-all duration-300">
            <div className="mb-4 text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
                <strong>Title:</strong>{' '}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                    {snippet.title}
                </code>
                <br/>
                <strong>Summary:</strong> {snippet.summary}
                <br/>
                <strong>Key Concepts:</strong>{' '}
                {snippet.keyConcepts.map((concept, i) => (
                    <code
                        key={i}
                        className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs mr-1"
                    >
                        {concept}
                    </code>
                ))}
            </div>

            <Link
                to={`/tutorial/${snippet.slug}`}
                className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:border-indigo-400 dark:text-indigo-300 transition"
            >
                Read More <FiArrowRight/>
            </Link>
        </div>
    );
}
