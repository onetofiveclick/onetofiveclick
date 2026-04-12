import fs from 'fs';
import path from 'path';

const filePath = 'd:/1to5click/app/blog/page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace Unsplash URLs in blogPosts array
// Find: image: 'https://images.unsplash.com/...q=80'
// Replace with: q=80&w=800
content = content.replace(/(image:\s*['"]https:\/\/images\.unsplash\.com\/[^'"]+q=80)(['"])/g, '$1&w=800$2');

fs.writeFileSync(filePath, content);
console.log('Optimized Unsplash URLs in app/blog/page.tsx');
