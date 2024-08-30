
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  
  webpack: (config, { isServer }) => {
    // Arregla paquetes que dependen de módulos ESM
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }

    return config;
  },
  experimental: { esmExternals: 'loose' }
});