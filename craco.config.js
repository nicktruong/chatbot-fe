const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@home': path.resolve(__dirname, './src/app/pages/Home/'),
      '@studio': path.resolve(__dirname, './src/app/pages/Studio/'),
    },
  },
};
