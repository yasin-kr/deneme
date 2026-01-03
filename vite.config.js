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

    rollupOptions: {
      external: ['fsevents'],
    },
  },

  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
}));
