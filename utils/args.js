function parseArgs(argv) {
  const entries = argv.map(arg => {
    // suporta: --mobile=true
    if (arg.startsWith('--')) {
      arg = arg.slice(2);
    }

    // suporta flags tipo: mobile (sem =)
    if (!arg.includes('=')) {
      return [arg, true];
    }

    const [key, ...rest] = arg.split('=');
    const value = rest.join('=');

    return [key, value];
  });

  return Object.fromEntries(entries);
}

function toBool(value, defaultValue = false) {
  if (value === undefined) return defaultValue;

  if (typeof value === 'boolean') return value;

  const normalized = String(value).toLowerCase();

  return ['true', '1', 'yes', 'y'].includes(normalized);
}

module.exports = {
  parseArgs,
  toBool
};