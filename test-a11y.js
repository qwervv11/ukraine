const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

const hasTabindex = html.includes('tabindex="0"');
const hasGalleryKeydown = js.includes('keydown') && js.includes('gallery-item');

console.log('Gallery has tabindex:', hasTabindex);
console.log('Gallery has keydown:', hasGalleryKeydown);
