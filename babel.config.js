export default {
  presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [],

  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
      plugins: ['babel-plugin-transform-import-meta', '@babel/plugin-transform-modules-commonjs'],
    },
  },
};
