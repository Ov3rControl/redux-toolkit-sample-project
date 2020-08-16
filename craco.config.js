const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0e7ee7',
              '@secondary-color': '#0a2b41',
              '@body-background': '#f0f2f5',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
