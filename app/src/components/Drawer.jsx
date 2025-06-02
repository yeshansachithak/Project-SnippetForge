import {FiX} from 'react-icons/fi';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

export default function Drawer({isOpen, setIsOpen, snippets}) {
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 sm:w-72 z-50 bg-white dark:bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-4 border-b dark:border-zinc-700">
                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">📘 Tutorials</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 dark:text-gray-300"
                    >
                        <FiX size={24}/>
                    </button>
                </div>

                <div className="p-4 overflow-y-auto">
                    <ul className="space-y-2 text-sm">
                        {snippets.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={`/tutorial/${s.slug}`}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
