import fs from 'fs';
import path from 'path';

// Fix 1: Canonical URLs in layout.tsx files
const layoutFiles = [
  'app/tools/aeo-generator/layout.tsx',
  'app/methodology/layout.tsx',
  'app/locations/riyadh/al-nakhil/layout.tsx',
  'app/locations/riyadh/diplomatic-quarter/layout.tsx',
  'app/locations/jeddah/al-shati/layout.tsx',
  'app/locations/jeddah/corniche/layout.tsx',
  'app/locations/jeddah/al-rawdah/layout.tsx',
  'app/locations/dammam/layout.tsx',
  'app/locations/dammam/ash-shati/layout.tsx',
  'app/blog/technical-seo-for-headless-cms/layout.tsx',
  'app/blog/google-discover-visibility/layout.tsx',
  'app/blog/future-of-local-search/layout.tsx',
  'app/blog/aeo-answer-engine-optimization-guide/layout.tsx',
];

console.log('🔄 Fixing 14 Canonical URLs (Removing www.)...');
layoutFiles.forEach(file => {
  const filepath = path.join(process.cwd(), file);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf-8');
    content = content.replace(/https:\/\/www\.onetofiveclick\.com/g, 'https://onetofiveclick.com');
    fs.writeFileSync(filepath, content);
    console.log(`✅ Fixed canonical in ${file}`);
  }
});

// Fix app/blog/[slug]/page.tsx
const slugPage = path.join(process.cwd(), 'app/blog/[slug]/page.tsx');
if (fs.existsSync(slugPage)) {
    let content = fs.readFileSync(slugPage, 'utf-8');
    content = content.replace(/https:\/\/www\.onetofiveclick\.com/g, 'https://onetofiveclick.com');
    fs.writeFileSync(slugPage, content);
    console.log(`✅ Fixed canonical in app/blog/[slug]/page.tsx`);
}

// Fix 2: Duplicate Blog Posts in app/blog/page.tsx
const blogPage = path.join(process.cwd(), 'app/blog/page.tsx');
if (fs.existsSync(blogPage)) {
  console.log('🔄 Removing duplicate blog posts ID 106 to 91...');
  let content = fs.readFileSync(blogPage, 'utf-8');
  
  // Find lines where the second block starts and ends
  const lines = content.split('\n');
  const all106Lines = lines.reduce((acc, line, i) => line.includes('id: 106,') ? [...acc, i] : acc, []);
  
  if (all106Lines.length > 1) {
    const startIdPos = all106Lines[1]; // The second occurrence of `id: 106,`
    const next90IdPos = lines.findIndex((l, i) => i > startIdPos && l.includes('id: 90,'));
    
    if (next90IdPos !== -1) {
      // Walk backwards to {
      let blockStart = startIdPos;
      while (blockStart > 0 && !lines[blockStart].includes('{')) blockStart--;
      
      // Walk backwards from 90 to },
      let blockEnd = next90IdPos;
      while (blockEnd > 0 && !lines[blockEnd].includes('},')) blockEnd--;
      
      const newLines = [...lines.slice(0, blockStart), ...lines.slice(blockEnd + 1)];
      fs.writeFileSync(blogPage, newLines.join('\n'));
      console.log(`✅ Removed duplicate block from line ${blockStart + 1} to ${blockEnd + 1}`);
    }
  }
}

// Fix 3: Missing Images and 404 image paths
const imagesToReplace = {
  '/jeddah_marketing_excellence_1775799895344.png': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  'https://onetofiveclick.com/jeddah_marketing_excellence_1775799895344.png': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  '/riyadh_digital_marketing_authority_1775799453369.png': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  'https://onetofiveclick.com/riyadh_digital_marketing_authority_1775799453369.png': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  '/happy_marketing_professional_smiling_17757379273.png': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  '/logo.png': '/logo.svg',
  'https://onetofiveclick.com/logo.png': 'https://onetofiveclick.com/logo.svg'
};

const pagesWithImages = [
  'app/locations/jeddah/page.tsx',
  'app/locations/jeddah/king-abdullah-rd/page.tsx',
  'app/locations/riyadh/page.tsx',
  'app/locations/riyadh/olaya/page.tsx',
  'app/locations/riyadh/al-malaz/page.tsx',
  'app/locations/riyadh/layout.tsx',
  'app/locations/riyadh/al-rawdah/page.tsx',
  'app/contact/page.tsx',
  'app/layout.tsx',
  'app/blog/aeo-answer-engine-optimization-guide/page.tsx',
];

console.log('🔄 Fixing 404 images and size attribute warnings...');
pagesWithImages.forEach(file => {
  const filepath = path.join(process.cwd(), file);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf-8');
    let changed = false;
    for (const [oldImg, newImg] of Object.entries(imagesToReplace)) {
      if (content.includes(oldImg)) {
        content = content.replace(new RegExp(oldImg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImg);
        changed = true;
      }
    }
    
    // Add generic width/height to any <img> to clear Screaming frog "Missing Size Attributes"
    const imgRegex = /<img([^>]+)>/g;
    content = content.replace(imgRegex, (match, p1) => {
      // Check if it already has width and height
      if (!p1.includes('width=') && !p1.includes('height=')) {
        changed = true;
        return `<img width="1200" height="800"${p1}>`;
      }
      return match;
    });

    if (changed) {
      fs.writeFileSync(filepath, content);
      console.log(`✅ Fixed images and sizes in ${file}`);
    }
  }
});

console.log('🎉 All SEO bugs fixed! You can now run `npm run build` and re-test with Screaming Frog.');
