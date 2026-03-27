const MODES = {
  'desktop-safari': {
    browserType: 'webkit',
    label: 'Safari Desktop',
    context: {
      viewport: { width: 1366, height: 768 },
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
    }
  },

  iphone: {
    browserType: 'webkit',
    label: 'iPhone Safari',
    context: {
      viewport: { width: 390, height: 844 },
      screen: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true,
      deviceScaleFactor: 3,
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    }
  },

  ipad: {
    browserType: 'webkit',
    label: 'iPad Safari',
    context: {
      viewport: { width: 820, height: 1180 },
      screen: { width: 820, height: 1180 },
      hasTouch: true,
      isMobile: true,
      deviceScaleFactor: 2,
      userAgent:
        'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    }
  },

  android: {
    browserType: 'chromium',
    label: 'Android Chrome',
    context: {
      viewport: { width: 412, height: 915 },
      screen: { width: 412, height: 915 },
      hasTouch: true,
      isMobile: true,
      deviceScaleFactor: 2.625,
      userAgent:
        'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36'
    }
  },

  'desktop-chrome': {
    browserType: 'chromium',
    label: 'Desktop Chrome',
    context: {
      viewport: { width: 1366, height: 768 },
      userAgent:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36'
    }
  }
};

function getMode(modeName) {
  return MODES[modeName];
}

function getModeNames() {
  return Object.keys(MODES);
}

module.exports = {
  MODES,
  getMode,
  getModeNames
};