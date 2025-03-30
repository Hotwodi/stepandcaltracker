// filepath: c:\Users\reggi\.vscode\stepcounterapp\babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', {
        enableBabelRuntime: true
      }]
    ],
    plugins: [
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-private-property-in-object',
      ['react-native-reanimated/plugin', {
        relativeSourceLocation: true
      }],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ]
    ]
  };
};