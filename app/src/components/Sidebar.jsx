import snippets from '../data/snippets';

export default function Sidebar() {
  return (
    <div className="fixed top-24 right-6 w-64 bg-white dark:bg-zinc-900 shadow-xl border border-gray-200 dark:border-zinc-700 rounded-lg p-4 max-h-[80vh] overflow-y-auto">
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
    </div>
  );
}
