const { webkit, chromium } = require('playwright');
const { getMode, getModeNames } = require('./modes');
const { parseArgs, toBool } = require('./utils/args');

const params = parseArgs(process.argv.slice(2));

const mode = params.mode || 'desktop-safari';
const siteUrl =
  params.url ||
  'https://dev.autocomparah.com/ofertas/?idCotacao=ff202788-648c-453d-8f93-00fffb34d9e4';

const headless = toBool(params.headless, false);
const devtools = toBool(params.devtools, true);
const screenshot = toBool(params.screenshot, false);
const screenshotPath = params.screenshotPath || 'debug.png';
const timeout = Number.isFinite(Number(params.timeout))
  ? Number(params.timeout)
  : 60000;

const currentMode = getMode(mode);

if (!currentMode) {
  console.error(`Modo inválido: ${mode}`);
  console.error(`Modos disponíveis: ${getModeNames().join(', ')}`);
  process.exit(1);
}

const browserLauncher =
  currentMode.browserType === 'chromium' ? chromium : webkit;

(async () => {
  try {
    console.log(`Modo: ${currentMode.label}`);
    console.log(`Browser: ${currentMode.browserType}`);
    console.log(`URL: ${siteUrl}`);

    const browser = await browserLauncher.launch({
      headless,
      devtools
    });

    const context = await browser.newContext(currentMode.context);
    const page = await context.newPage();

    page.on('console', msg => console.log('[browser]', msg.text()));
    page.on('pageerror', err => console.log('[pageerror]', err.message));
    page.on('requestfailed', req =>
      console.log('[requestfailed]', req.url(), req.failure()?.errorText)
    );

    await page.goto(siteUrl, {
      waitUntil: 'load',
      timeout
    });

    await page.waitForTimeout(2000);

    if (screenshot) {
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });
      console.log(`Screenshot salvo em: ${screenshotPath}`);
    }

    console.log('Página carregada.');
    console.log('PRESSIONE Ctrl + C para sair.');
  } catch (error) {
    console.error('Erro ao executar o emulador:');
    console.error(error);
    process.exit(1);
  }
})();