import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import snippets from '../data/snippets';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
        <button
            onClick={() => setOpen(!open)}
            className="fixed top-0 right-0 sm:top-20 sm:bottom-auto bg-blue-600 text-white px-4 py-2 shadow-md hover:bg-blue-700 transition z-50"
        >
            {open ? 'Hide TOC' : 'Show TOC'}
        </button>

        <AnimatePresence>
        {open && (
            <motion.div
                key="sidebar"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
                className="fixed top-20 right-0 w-64 sm:w-72 max-w-full h-[calc(100vh-5rem)] sm:h-auto bg-white dark:bg-zinc-900 shadow-xl border border-gray-200 dark:border-zinc-700 rounded-l-lg sm:rounded-lg p-4 overflow-y-auto z-40"
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
