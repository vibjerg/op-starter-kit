/**
 * @file
 * Bootstraps the server and initialized babel, so all JSX and ES6 is transpiled
 *
 */
require('babel-register')({
  presets: ['react', 'es2015'],
  plugins: ['transform-runtime', 'transform-async-to-generator']
});

require('./server/app.js');
