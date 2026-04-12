const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('.next')) {
                replaceInDir(fullPath);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('+966XXXXXXXXX')) {
                if (fullPath.includes('WhatsAppButton')) {
                    content = content.replace(/\+966XXXXXXXXX/g, '966575806733');
                } else {
                    content = content.replace(/\+966XXXXXXXXX/g, '+966 57 580 6733');
                }
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

replaceInDir('d:/1to5click');
