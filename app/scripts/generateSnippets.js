// generateSnippets.js
const fs = require('fs');
const path = require('path');

// Adjust path to point to public/snippets from scripts/
const dir = path.join(__dirname, '..', 'public', 'snippets');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'snippets.js');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const snippets = files.map((file, index) => {
    const slug = file.replace(/\.md$/, '').replace(/^\d+-/, '');
    const title = slug
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    return {
        id: index,
        slug,
        title,
        file: `/snippets/${file}`,
    };
});

const output = `const snippets = ${JSON.stringify(snippets, null, 2)};\n\nexport default snippets;\n`;

fs.writeFileSync(outputPath, output);
console.log(`✅ Snippets data generated: ${outputPath}`);
