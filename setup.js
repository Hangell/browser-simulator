setup.jsconst { execSync } = require('node:child_process');
const os = require('node:os');

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: 'inherit' });
}

try {
  console.log(`Sistema detectado: ${os.platform()}`);

  run('npx playwright install');

  if (os.platform() === 'linux') {
    console.log('\nLinux detectado.');
    console.log('Para instalar dependências do sistema, rode manualmente:');
    console.log('sudo npx playwright install-deps');
  }

  if (os.platform() === 'win32') {
    console.log('\nWindows detectado.');
    console.log('Normalmente não precisa de install-deps.');
  }

  if (os.platform() === 'darwin') {
    console.log('\nmacOS detectado.');
    console.log('Normalmente basta o playwright install.');
  }

  console.log('\nSetup concluído.');
} catch (error) {
  console.error('\nErro no setup:');
  console.error(error.message);
  process.exit(1);
}