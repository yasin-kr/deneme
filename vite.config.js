import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  base: './',

  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },

  root: 'src',

  build: {
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
}));
