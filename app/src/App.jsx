import {useState} from 'react';
import {Link} from 'react-router-dom';
import snippetsData from './data/snippets';
import {ErrorBoundary} from './components/ErrorBoundary';
import Drawer from './components/Drawer';
import SnippetCard from './components/SnippetCard';
import Header from './components/Header';

export default function App() {
    const [search, setSearch] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeConcept, setActiveConcept] = useState(null);

    const allConcepts = Array.from(
        new Set(snippetsData.flatMap((s) => s.keyConcepts))
    ).sort();

    const filteredSnippets = snippetsData.filter(
        (snippet) =>
            snippet.title.toLowerCase().includes(search.toLowerCase()) &&
            (!activeConcept || snippet.keyConcepts.includes(activeConcept))
    );

    return (
        <div className="relative min-h-screen bg-white dark:bg-zinc-900">
            <Header
                search={search}
                setSearch={setSearch}
                allConcepts={allConcepts}
                activeConcept={activeConcept}
                setActiveConcept={setActiveConcept}
                onMenuClick={() => setSidebarOpen(true)}
            />

            <Drawer
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                snippets={snippetsData}
            />

            <main className="pt-[100px] sm:pt-[240px] px-4 sm:px-6 max-w-7xl mx-auto pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {filteredSnippets.map((snippet) => (
                        <div
                            key={snippet.id}
                            id={snippet.slug}
                            className="scroll-mt-24"
                        >
                            <ErrorBoundary>
                                <SnippetCard snippet={snippet}/>
                            </ErrorBoundary>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
