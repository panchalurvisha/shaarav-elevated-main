const fs = require('fs');
const path = require('path');

const folders = ['about', 'products', 'quality', 'sustainability', 'export', 'contact'];

folders.forEach(folder => {
  const introName = folder.charAt(0).toUpperCase() + folder.slice(1) + 'Intro.jsx';
  const file = path.join(__dirname, 'src', 'components', folder, introName);
  
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix the broken map array (currently `{1.map` due to previous bad replacement)
    // We need to restore the original JSON arrays from pageData
    content = content.replace(/\{1\.map/g, '{\n            [\n              { label: "Founded", value: "India" },\n              { label: "Focus", value: "Premium Export" },\n              { label: "Discipline", value: "Sourcing · Process · Pack" },\n              { label: "Audience", value: "Retail · HoReCa · Private Label" }\n            ].map');
    
    // Actually, since each page has different meta data, restoring them identically is wrong!
    // I need to use the actual pageData.
  }
});
