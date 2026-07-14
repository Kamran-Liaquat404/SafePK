import fs from 'fs';
import path from 'path';

console.log('Building project...');

// Clean dist folder
if (fs.existsSync('./dist')) {
  fs.rmSync('./dist', { recursive: true, force: true });
}
fs.mkdirSync('./dist');

// Copy files and folders
const itemsToCopy = ['index.html', 'manifest.json', 'sw.js', 'css', 'js', 'assets', 'pages'];

for (const item of itemsToCopy) {
  if (fs.existsSync(item)) {
    fs.cpSync(item, path.join('./dist', item), { recursive: true });
    console.log(`Copied: ${item}`);
  }
}

console.log('Build complete! Static files successfully copied to dist/');
