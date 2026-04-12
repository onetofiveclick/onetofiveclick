import fs from 'fs';

const file = 'd:/1to5click/app/blog/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Use a safe regex to replace everything between the two known good strings
// This avoids any issues with corrupted characters or invisible bytes
const newBlock = `slug: 'http3-edge-seo-future'
    },
    {
        id: 106,
        title: 'ميزات نتائج البحث وملخصات AI (SERP Features): احتلال الشاشة',
        excerpt: 'كيف تسيطر على الخريطة، الصور، المراجعات، وإجابات الذكاء الاصطناعي في آن واحد للسيطرة على انتباه السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        slug: 'serp-features-ai-summaries'`;

content = content.replace(/slug:\s*'http3-edge-seo-future'[\s\S]*?slug:\s*'serp-features-ai-summaries'/g, newBlock);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed the corrupted block successfully! Now you can run npm run build.');
