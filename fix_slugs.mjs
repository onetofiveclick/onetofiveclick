import fs from 'fs';
import path from 'path';

const blogDir = path.resolve('d:/1to5click/app/blog');
const appDir = path.resolve('d:/1to5click/app');

// 1. Find all blog directories ending in -YEAR (-2026, -2027, etc.)
const folders = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const mappings = {}; // { oldSlug: newSlug }

for (const folder of folders) {
  // Match patterns like -2026, -2027 at the end of the string
  const match = folder.match(/-(\d{4})$/);
  if (match) {
    const newFolderName = folder.replace(/-(\d{4})$/, '');
    const oldPath = path.join(blogDir, folder);
    const newPath = path.join(blogDir, newFolderName);
    
    // Check if new path already exists
    if (!fs.existsSync(newPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed folder: ${folder} -> ${newFolderName}`);
    } else {
      console.warn(`Warning: Could not rename ${folder} because ${newFolderName} already exists.`);
    }
    mappings[folder] = newFolderName;
  }
}

// 2. Recursively find all files in the app directory and sitemap to update links/slugs
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(appDir, (filePath) => {
  // Only process ts, tsx, js, mdx, md files
  if (/\.(tsx?|jsx?|mdx?)$/.test(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Replace the old slug with the new slug
    for (const [oldSlug, newSlug] of Object.entries(mappings)) {
      // Use a simple replacement. If the content has the exact old slug, we replace it.
      if (content.includes(oldSlug)) {
        // Create regex that replaces oldSlug but only with word boundaries or valid URL separators
        // This prevents partial replacements in words that just happen to contain the slug.
        const regex = new RegExp(`\\b${oldSlug}\\b`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newSlug);
          hasChanges = true;
        }
      }
    }
    
    // Special clean up for slugs that might be generated dynamically or missed
    // e.g., if there are hardcoded internal links like `/blog/some-title-2026`
    // where the folder might have been skipped, but we can do a global replace for `/blog/****-2026`
    // However, our mappings already cover all renamed folders, so the mapping loop should be enough.
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated references in: ${filePath}`);
    }
  }
});

console.log("Done fixing slugs! You might want to format the files with prettier if needed.");
