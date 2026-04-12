import fs from 'fs';
const file = 'd:/1to5click/app/blog/page.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// The error is between lines 627 and 631 (1-indexed), so 626 to 630 in array
const startIndex = 627 - 1;
const endIndex = 631 - 1;

lines.splice(startIndex, (endIndex - startIndex + 1), 
`        slug: 'http3-edge-seo-future'
    },
    {
        id: 106,
        title: 'ميزات نتائج البحث وملخصات AI (SERP Features): احتلال الشاشة',
        excerpt: 'كيف تسيطر على الخريطة، الصور، المراجعات، وإجابات الذكاء الاصطناعي في آن واحد للسيطرة على انتباه السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        slug: 'serp-features-ai-summaries'
    },`);

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('Fixed the corrupted block successfully!');
