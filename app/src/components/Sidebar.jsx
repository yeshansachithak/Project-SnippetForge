import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import snippets from '../data/snippets';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-20 right-6 z-50 bg-blue-600 text-white px-3 py-1 rounded shadow-md hover:bg-blue-700 transition"
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
            className="fixed top-24 right-6 w-64 bg-white dark:bg-zinc-900 shadow-xl border border-gray-200 dark:border-zinc-700 rounded-lg p-4 max-h-[80vh] overflow-y-auto z-40"
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
