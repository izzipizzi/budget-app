const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
      '@images': path.resolve(__dirname, 'src/static/images/'),
    },
  };

  return config;
};