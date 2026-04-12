import fs from 'fs';

const file = 'd:/1to5click/app/blog/page.tsx';
const buf = fs.readFileSync(file);
const content = buf.toString('utf8');

// Split on CRLF (Windows) or LF
const lines = content.split(/\r?\n/);

console.log(`Total lines: ${lines.length}`);

// Find the problematic line by checking around "http3-edge-seo-future"
let targetIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('http3-edge-seo-future')) {
    targetIndex = i;
    console.log(`Found 'http3-edge-seo-future' at line ${i + 1}: ${lines[i]}`);
    // Show the next few lines
    for (let j = 1; j <= 5; j++) {
      if (i + j < lines.length) {
        const hexChars = [...lines[i+j]].map(c => c.charCodeAt(0).toString(16)).join(' ');
        console.log(`Line ${i + j + 1}: "${lines[i+j]}"`);
        console.log(`  Hex: ${hexChars}`);
      }
    }
    break;
  }
}

if (targetIndex === -1) {
  console.log('Could not find http3-edge-seo-future. Searching for nearby content...');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('serp-features')) {
      console.log(`Line ${i+1}: ${lines[i]}`);
    }
  }
}

// Now find the line with "id: 105" that comes after
let endIndex = -1;
for (let i = targetIndex + 1; i < lines.length; i++) {
  if (lines[i].includes('id: 105') || lines[i].includes('Duplicate Content')) {
    endIndex = i;
    console.log(`Found end marker at line ${i + 1}`);
    break;
  }
}

if (targetIndex >= 0 && endIndex >= 0) {
  // Replace lines from targetIndex+1 to endIndex-1 with clean content
  // targetIndex is the line with slug: 'http3-edge-seo-future'
  // We need to keep targetIndex, replace targetIndex+1 through endIndex-3 (the { before id: 105)
  // and keep endIndex onward
  
  const replacement = [
    "    },",
    "    {",
    "        id: 106,",
    "        title: 'ميزات نتائج البحث وملخصات AI (SERP Features): احتلال الشاشة',",
    "        excerpt: 'كيف تسيطر على الخريطة، الصور، المراجعات، وإجابات الذكاء الاصطناعي في آن واحد للسيطرة على انتباه السوق السعودي.',",
    "        author: 'فريق ون تو فايف كليك',",
    "        date: '11 أبريل 2026',",
    "        category: 'التقنية والسيو',",
    "        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',",
    "        slug: 'serp-features-ai-summaries'",
    "    },",
    "    {"
  ];

  // Remove the corrupted lines and insert clean ones
  // Keep everything up to and including targetIndex (slug: http3...)
  // Then skip the corrupted lines until we reach endIndex (id: 105 line)
  const newLines = [
    ...lines.slice(0, targetIndex + 1),
    ...replacement,
    ...lines.slice(endIndex)
  ];

  const output = newLines.join('\r\n');
  fs.writeFileSync(file, output, 'utf8');
  console.log(`\nSUCCESS! Replaced lines ${targetIndex + 2} through ${endIndex} with clean content.`);
  console.log('Now run: npm run build');
} else {
  console.log('ERROR: Could not find the target region to fix.');
}
