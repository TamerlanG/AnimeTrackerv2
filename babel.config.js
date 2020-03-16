module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          views: './src/views',
          components: './src/components',
          store: './src/store',
          config: './src/config.js',
          utils: './src/modules/utils',
          services: './src/services'
        },
      },
    ],
  ],
};
