const { dependencies } = require('./package.json');

module.exports = {
  name: 'emotion2',
  remotes: {
    emotion1:
      'emotion1@http://localhost:5001/remoteEntry.js',
  },
  exposes: {
    './ButtonWrapper': './src/ButtonWrapper',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
