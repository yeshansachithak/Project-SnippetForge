import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import SnippetViewer from './SnippetViewer';
import snippetsData from '../data/snippets';
import { Helmet } from "react-helmet-async";

export default function TutorialPage() {
    const { slug } = useParams();
    const snippet = snippetsData.find((s) => s.slug === slug);
    if (!snippet) return <p className="p-6">Snippet not found.</p>;

    return (
        <>
            <Helmet>
                <title>{snippet.title} | SnippetForge</title>
                <meta name="description" content={snippet.summary} />
                <link rel="canonical" href={`https://snippetforge.web.app/tutorial/${slug}`} />
                <meta property="og:site_name" content="SnippetForge" />
                <meta property="og:title" content={snippet.title} />
                <meta property="og:description" content={snippet.summary} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://snippetforge.web.app/tutorial/${slug}`} />
                <meta property="og:image" content={snippet.imageUrl || "https://snippetforge.web.app/Logo.png"} />
                <meta property="og:logo" content="https://snippetforge.web.app/Logo.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={snippet.title} />
                <meta name="twitter:description" content={snippet.summary} />
                <meta name="twitter:image" content={snippet.imageUrl || "https://snippetforge.web.app/Logo.png"} />
            </Helmet>
            {/* Sticky Header */}
            <div
                className="fixed top-0 left-0 w-full z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm px-4 py-4">
                <div className="max-w-7xl mx-auto relative">
                    <Link
                        to="/"
                        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                        <FiArrowLeft />
                        Back
                    </Link>

                    <div className="text-center">
                        <Link to="/" className="inline-block group">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-[length:200%_200%] animate-gradient">
                                SnippetForge
                            </h1>
                        </Link>
                        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-wide">
                            Tutorials&nbsp;&nbsp;|&nbsp;&nbsp;Snippet&nbsp;&nbsp;|&nbsp;&nbsp;Blog
                        </p>
                    </div>
                </div>
            </div>

            {/* Markdown Content */}
            <div className="pt-[100px] sm:pt-[120px] px-4 sm:px-6 max-w-7xl mx-auto pb-20">
                <SnippetViewer path={snippet.file} />
            </div>
        </>
    );
}
