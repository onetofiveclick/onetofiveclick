import fs from 'fs';
import path from 'path';

// List of files that were broken by fix_gt.mjs
const brokenFiles = [
  'd:/1to5click/app/blog/ahrefs-review-saudi/page.tsx',
  'd:/1to5click/app/blog/ai-generated-content-policy/page.tsx',
  'd:/1to5click/app/blog/clarity-vs-hotjar-cro-saudi/page.tsx',
  'd:/1to5click/app/blog/ecommerce-seo-guide/page.tsx',
  'd:/1to5click/app/blog/google-core-updates/page.tsx',
  'd:/1to5click/app/blog/google-discover-visibility/page.tsx',
  'd:/1to5click/app/blog/history-of-search-engines-guide/page.tsx',
  'd:/1to5click/app/blog/page.tsx',
  'd:/1to5click/app/blog/programmatic-seo-saudi/page.tsx',
  'd:/1to5click/app/blog/semrush-review-saudi/page.tsx',
  'd:/1to5click/app/blog/seo-trends/page.tsx',
  'd:/1to5click/app/blog/surferseo-review-saudi/page.tsx',
  'd:/1to5click/app/blog/wordpress-seo/page.tsx',
  'd:/1to5click/app/blog/content-kpis/page.tsx',
];

let totalFixes = 0;

for (const filePath of brokenFiles) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping (not found): ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Step 1: Undo ALL &gt; back to > first
  content = content.replace(/&gt;/g, '>');
  
  // Step 2: Now carefully re-escape ONLY > that appears in plain text content
  // These are > characters that are NOT part of JSX tag syntax
  // Pattern: > that is surrounded by word chars/Arabic/spaces (not tag boundaries)
  // Specifically target patterns like: (X > Y) in text
  // We look for > preceded by a space and followed by a space (comparison operators in text)
  content = content.replace(/(\s)>(\s)/g, (match, before, after, offset) => {
    // Check if this is inside a JSX attribute or tag by looking at surrounding context
    // Find the nearest < before this position
    const beforeStr = content.substring(Math.max(0, offset - 200), offset);
    const afterStr = content.substring(offset, Math.min(content.length, offset + 200));
    
    // If we're inside a tag (last < is not closed by >), don't replace
    const lastOpenTag = beforeStr.lastIndexOf('<');
    const lastCloseAngle = beforeStr.lastIndexOf('>');
    
    if (lastOpenTag > lastCloseAngle) {
      // We're inside a JSX tag, don't escape
      return match;
    }
    
    // Check if this line looks like text content (contains Arabic or long text)
    const lineStart = content.lastIndexOf('\n', offset) + 1;
    const lineEnd = content.indexOf('\n', offset);
    const line = content.substring(lineStart, lineEnd === -1 ? content.length : lineEnd).trim();
    
    // If the line starts with < it's a tag line, don't touch
    if (line.startsWith('<') || line.startsWith('{')) {
      return match;
    }
    
    // This looks like text content with > as a comparison, escape it
    return before + '&gt;' + after;
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixes++;
    console.log(`✓ Fixed: ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`);
  }
}

console.log(`\nDone! Fixed ${totalFixes} files.`);
console.log('Now run: npm run build');
