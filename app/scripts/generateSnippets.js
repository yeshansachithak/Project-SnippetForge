const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'snippets');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'snippets.js');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

function extractMetadata(content) {
    const titleMatch = content.match(/^\*\*Title:\*\*\s*`([^`]+)`/m);
    const summaryMatch = content.match(/^\*\*Summary:\*\*\s*(.+)/m);
    const conceptsMatch = content.match(/^\*\*Key Concepts:\*\*\s*`([^`]+(?:`,\s*`[^`]+)*)`/m);

    return {
        title: titleMatch ? titleMatch[1] : '',
        summary: summaryMatch ? summaryMatch[1] : '',
        keyConcepts: conceptsMatch ? conceptsMatch[1].split(/`,\s*`/) : [],
    };
}

const snippets = files.map((file, index) => {
    const slug = file.replace(/\.md$/, '').replace(/^\d+-/, '');
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const metadata = extractMetadata(content);

    return {
        id: index,
        slug,
        title: metadata.title || slug,
        summary: metadata.summary,
        keyConcepts: metadata.keyConcepts,
        file: `/snippets/${file}`,
    };
});

const output = `const snippets = ${JSON.stringify(snippets, null, 2)};\n\nexport default snippets;\n`;
fs.writeFileSync(outputPath, output);

console.log(`✅ Snippets data generated with metadata: ${outputPath}`);
