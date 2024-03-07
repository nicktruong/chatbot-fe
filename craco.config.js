const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@studio': path.resolve(__dirname, './src/app/pages/Studio/'),
    },
  },
};
