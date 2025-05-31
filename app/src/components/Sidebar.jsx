import {FiX} from 'react-icons/fi';
import snippets from '../data/snippets';

export default function Sidebar({isOpen, setIsOpen}) {
    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden" onClick={() => setIsOpen(false)}/>
            )}

            {/* Sidebar */}
            <div className={`
                bg-white dark:bg-zinc-900 shadow-lg z-50 transition-all duration-300
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                fixed top-0 right-0 w-64 h-full sm:static sm:translate-x-0 sm:w-72 sm:h-auto sm:border-l sm:border-zinc-700
            `}>
                {/* Close button only on mobile */}
                <div className="sm:hidden flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300">
                        <FiX size={24}/>
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-lg font-bold mb-3 text-gray-700 dark:text-gray-200">📘 Tutorials</h2>
                    <ul className="space-y-2 text-sm">
                        {snippets.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.slug}`}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                    onClick={() => setIsOpen(false)} // auto-close on mobile
                                >
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
