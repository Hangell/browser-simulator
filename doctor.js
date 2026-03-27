const os = require('node:os');

console.log(`Sistema detectado: ${os.platform()}`);

if (os.platform() === 'linux') {
  console.log('Se o WebKit não abrir, rode: sudo npx playwright install-deps');
} else if (os.platform() === 'win32') {
  console.log('No Windows normalmente basta: npm install');
} else if (os.platform() === 'darwin') {
  console.log('No macOS normalmente basta: npm install');
} else {
  console.log('Sistema não mapeado especificamente. Teste com npm install.');
}