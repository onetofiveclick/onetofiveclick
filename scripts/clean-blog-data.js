const fs = require('fs');
const path = require('path');

// Get all actual blog directories
const blogDir = path.join(__dirname, '..', 'app', 'blog');
const existingDirs = fs.readdirSync(blogDir).filter(f => {
  const fullPath = path.join(blogDir, f);
  return fs.statSync(fullPath).isDirectory() && f !== '[slug]';
});

console.log(`Found ${existingDirs.length} blog page directories`);

// Also include slugs handled by the [slug] dynamic route
const slugPagePath = path.join(blogDir, '[slug]', 'page.tsx');
const slugContent = fs.readFileSync(slugPagePath, 'utf-8');
const dynamicSlugs = [];
const slugRegex = /'([a-z0-9-]+)':\s*\{/g;
let match;
while ((match = slugRegex.exec(slugContent)) !== null) {
  dynamicSlugs.push(match[1]);
}
console.log(`Found ${dynamicSlugs.length} dynamic [slug] entries`);

// Combine all valid slugs
const validSlugs = new Set([...existingDirs, ...dynamicSlugs]);
console.log(`Total valid slugs: ${validSlugs.size}`);

// Read blog-data.ts
const blogDataPath = path.join(__dirname, '..', 'lib', 'blog-data.ts');
const content = fs.readFileSync(blogDataPath, 'utf-8');

// Parse and filter entries
const lines = content.split('\n');

// Find the array start
const arrayStartIdx = lines.findIndex(l => l.includes('export const blogPosts'));

// Extract the interface part (before array)
const interfacePart = lines.slice(0, arrayStartIdx).join('\n');

// Parse entries using regex on the full content
const entryRegex = /\{\s*id:\s*(\d+),\s*title:\s*'([^']*)',\s*excerpt:\s*'([^']*)',\s*author:\s*'([^']*)',\s*date:\s*'([^']*)',\s*category:\s*'([^']*)',\s*image:\s*'([^']*)',\s*slug:\s*'([^']*)'\s*\}/gs;

const entries = [];
let m;
while ((m = entryRegex.exec(content)) !== null) {
  entries.push({
    id: parseInt(m[1]),
    title: m[2],
    excerpt: m[3],
    author: m[4],
    date: m[5],
    category: m[6],
    image: m[7],
    slug: m[8]
  });
}

console.log(`Total entries in blog-data.ts: ${entries.length}`);

// Filter to only valid slugs
const validEntries = entries.filter(e => validSlugs.has(e.slug));
const removedEntries = entries.filter(e => !validSlugs.has(e.slug));

console.log(`Valid entries (keeping): ${validEntries.length}`);
console.log(`Orphaned entries (removing): ${removedEntries.length}`);
console.log('\nRemoved slugs:');
removedEntries.forEach(e => console.log(`  - ${e.slug}`));

// Rebuild file
const escapeQuotes = (s) => s.replace(/'/g, "\\'");

let output = interfacePart + '\n';
output += 'export const blogPosts: BlogPost[] = [\n';

validEntries.forEach((entry, i) => {
  output += `    {\n`;
  output += `        id: ${entry.id},\n`;
  output += `        title: '${entry.title}',\n`;
  output += `        excerpt: '${entry.excerpt}',\n`;
  output += `        author: '${entry.author}',\n`;
  output += `        date: '${entry.date}',\n`;
  output += `        category: '${entry.category}',\n`;
  output += `        image: '${entry.image}',\n`;
  output += `        slug: '${entry.slug}'\n`;
  output += `    }${i < validEntries.length - 1 ? ',' : ''}\n`;
});

output += '];\n';

fs.writeFileSync(blogDataPath, output, 'utf-8');
console.log(`\nDone! Wrote ${validEntries.length} entries to blog-data.ts`);
