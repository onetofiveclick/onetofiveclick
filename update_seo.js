const fs = require('fs');

const files = [
  'd:/1to5click/app/methodology/page.tsx',
  'd:/1to5click/app/services/content-writing/page.tsx',
  'd:/1to5click/app/locations/riyadh/diplomatic-quarter/page.tsx',
  'd:/1to5click/app/services/nextjs-development/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove use client
  content = content.replace(/'use client';\n*/g, '');
  
  // Remove framer-motion imports
  content = content.replace(/import\s+{\s*motion\s*(?:,\s*AnimatePresence)?\s*}\s+from\s+'framer-motion';\n*/g, '');
  
  // Special case for nextjs-development where motion might be imported alone
  content = content.replace(/import\s+{\s*motion\s*}\s+from\s+'framer-motion';\n*/g, '');

  // Extract className from motion.div
  content = content.replace(/<motion\.([a-zA-Z]+)([\s\S]*?)className="(.*?)"([\s\S]*?)>/g, (match, tag, before, className, after) => {
    // Strip initial, animate, whileInView, transition, viewport from before and after
    const cleanBefore = before.replace(/(initial|animate|whileInView|transition|viewport)=\{\{.*?\}\}\s*/g, '');
    const cleanAfter = after.replace(/(initial|animate|whileInView|transition|viewport)=\{\{.*?\}\}\s*/g, '');
    
    // Add animate-in fade-in classes
    const animateClasses = "animate-in fade-in zoom-in duration-1000";
    
    return `<${tag}${cleanBefore}className="${animateClasses} ${className}"${cleanAfter}>`;
  });
  
  // Some motion.divs might not have a className
  content = content.replace(/<motion\.([a-zA-Z]+)([\s\S]*?)>/g, (match, tag, rest) => {
    const cleanRest = rest.replace(/(initial|animate|whileInView|transition|viewport)=\{\{.*?\}\}\s*/g, '');
    if (cleanRest.includes('className=')) {
        return `<${tag}${cleanRest}>`;
    }
    return `<${tag} className="animate-in fade-in zoom-in duration-1000"${cleanRest}>`;
  });

  // Replace closing tags
  content = content.replace(/<\/motion\.([a-zA-Z]+)>/g, '</$1>');

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
