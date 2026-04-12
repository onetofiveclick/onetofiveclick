import fs from 'fs';
import path from 'path';

const blogDir = 'd:/1to5click/app/blog';
let fixedCount = 0;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

walkDir(blogDir, (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Find all unescaped > inside JSX text content (not inside tags or attributes)
  // Strategy: Look for > that appears in Arabic text context (between Arabic chars or common patterns)
  // The pattern (X > Y) in flowing text needs to be escaped
  
  // Match > that is:
  // - preceded by a space, letter, or closing paren
  // - followed by a space, letter, or opening paren
  // - NOT part of JSX tag syntax (not preceded by = or / or tag name patterns)
  // - NOT at start of line (JSX closing tags)
  
  // Simple approach: find lines that are JSX text (not starting with < after trim, not import/export)
  // and replace > with &gt; only in those text portions
  
  const lines = content.split('\n');
  const newLines = lines.map((line, i) => {
    const trimmed = line.trim();
    
    // Skip lines that are clearly JSX tags, imports, exports, or code
    if (trimmed.startsWith('<') || trimmed.startsWith('import ') || 
        trimmed.startsWith('export ') || trimmed.startsWith('//') ||
        trimmed.startsWith('{') || trimmed.startsWith('}') ||
        trimmed.startsWith('const ') || trimmed.startsWith('let ') ||
        trimmed.startsWith('return') || trimmed === '') {
      return line;
    }
    
    // This is likely a text content line inside JSX
    // Replace > that appears between word characters/spaces (not JSX tag syntax)
    // Pattern: space or letter/digit before >, space or letter after >
    const newLine = line.replace(/(\S)\s*>\s*(\S)/g, (match, before, after) => {
      // Don't replace if it looks like JSX tag syntax
      if (after === '/' || before === '=' || before === '"' || before === "'") {
        return match;
      }
      return match.replace('>', '&gt;');
    });
    
    if (newLine !== line) {
      changed = true;
      console.log(`  Fixed line ${i + 1} in ${path.relative(blogDir, filePath)}`);
    }
    return newLine;
  });
  
  if (changed) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    fixedCount++;
    console.log(`✓ Fixed: ${path.relative(blogDir, filePath)}`);
  }
});

console.log(`\nDone! Fixed ${fixedCount} files.`);
console.log('Now run: npm run build');
