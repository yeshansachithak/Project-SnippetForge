import SnippetViewer from './components/SnippetViewer';

const snippets = [
  { id: 1, title: 'Basic Component', file: '/snippets/01-basic-component.md' },
  { id: 2, title: 'useState Hook', file: '/snippets/02-useState.md' },
  { id: 3, title: 'useEffect Fetch', file: '/snippets/03-useEffect-fetch.md' },
  { id: 4, title: 'Controlled Form', file: '/snippets/04-controlled-form.md' },
  { id: 5, title: 'Conditional Render', file: '/snippets/05-conditional-render.md' },
  { id: 6, title: 'Mapping Array', file: '/snippets/06-mapping-array.md' },
  { id: 7, title: 'React Router v6', file: '/snippets/07-router.md' },
  { id: 8, title: 'Context API', file: '/snippets/08-context-api.md' },
  { id: 9, title: 'Redux Toolkit', file: '/snippets/09-redux-toolkit.md' },
  { id: 10, title: 'Tailwind Button', file: '/snippets/10-tailwind-button.md' },
  { id: 11, title: 'Custom Hook', file: '/snippets/11-custom-hook.md' },
  { id: 12, title: 'Lazy Loading', file: '/snippets/12-lazy-loading.md' },
  { id: 13, title: 'Image Upload Preview', file: '/snippets/13-upload-preview.md' },
];

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">ReactJS Snippet Tutorials</h1>
      {snippets.map(snippet => (
        <div key={snippet.id} className="mb-10">
          <SnippetViewer path={snippet.file} />
        </div>
      ))}
    </div>
  );
}
