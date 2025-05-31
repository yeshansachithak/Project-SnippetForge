// src/components/TutorialPage.jsx
import {useParams} from 'react-router-dom';
import SnippetViewer from './SnippetViewer';
import snippetsData from '../data/snippets';

export default function TutorialPage() {
    const {slug} = useParams();
    const snippet = snippetsData.find(s => s.slug === slug);

    if (!snippet) return <p>Snippet not found.</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-6">
            <SnippetViewer path={snippet.file}/>
        </div>
    );
}
