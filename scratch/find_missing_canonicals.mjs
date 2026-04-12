import fs from 'fs';
import path from 'path';

const appDir = 'd:/1to5click/app';

function findFiles(dir, filename) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findFiles(filePath, filename));
        } else if (file === filename) {
            results.push(filePath);
        }
    });
    return results;
}

const pages = findFiles(appDir, 'page.tsx');

pages.forEach(pagePath => {
    const pageContent = fs.readFileSync(pagePath, 'utf8');
    const dir = path.dirname(pagePath);
    const layoutPath = path.join(dir, 'layout.tsx');
    let layoutContent = '';
    if (fs.existsSync(layoutPath)) {
        layoutContent = fs.readFileSync(layoutPath, 'utf8');
    }

    if (!pageContent.includes('canonical') && !layoutContent.includes('canonical')) {
        console.log(`MISSING: ${pagePath}`);
    }
});
