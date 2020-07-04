const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const themePath = 'assets';
const buildPath = 'build';

mix.js(`${themePath}/js/custom.js`, `${buildPath}/js/custom.js`)
  .sass(`${themePath}/sass/app.scss`, `${buildPath}/css/styles.css`)
  .copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'build/js/bootstrap.min.js')
  .browserSync({
    proxy: false,
    server: true,
    files: [
      'assets/**',
      'index.html'
    ]
  }).webpackConfig({
      plugins: [
          new LiveReloadPlugin()
      ],
  });