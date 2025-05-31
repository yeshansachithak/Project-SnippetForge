import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {FiMenu, FiX} from 'react-icons/fi'; // Menu and Close icons
import snippets from '../data/snippets';

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-0 right-0 sm:top-20 sm:bottom-auto sm:right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 shadow-lg transition z-50"
                aria-label="Toggle TOC"
            >
                {open ? <FiX size={20}/> : <FiMenu size={20}/>}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="sidebar"
                        initial={{x: '100%'}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{type: 'tween', ease: 'easeOut', duration: 0.4}}
                        className="fixed top-0 right-0 h-full w-64 sm:w-72 bg-white dark:bg-zinc-900 shadow-xl border-l border-gray-200 dark:border-zinc-700 p-4 overflow-y-auto z-40"
                    >
                        <h2 className="text-lg font-bold mb-3 text-gray-700 dark:text-gray-200">📘 Tutorials</h2>
                        <ul className="space-y-2 text-sm">
                            {snippets.map((s) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.slug}`}
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
