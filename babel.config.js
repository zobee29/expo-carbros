module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: [__dirname],
          alias: {
            theme: './theme',
            javascript: './javascript',
            pages: './javascript/pages',
            services: './javascript/services',
            datastore: './javascript/datastore',
            components: './javascript/components',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};