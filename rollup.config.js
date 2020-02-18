// https://github.com/ezolenko/rollup-plugin-typescript2
import typescript from 'rollup-plugin-typescript2';
// https://github.com/pmowrer/rollup-plugin-peer-deps-external
import external from 'rollup-plugin-peer-deps-external';
// https://github.com/rollup/rollup-plugin-url
import url from 'rollup-plugin-url';
// https://github.com/egoist/rollup-plugin-postcss
import postcss from 'rollup-plugin-postcss';

export default ({ pkgJson }) => ({
  input: 'src/index.ts',
  output: [
    {
      file: pkgJson.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkgJson.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
    external(),
    url(),
    typescript({
      // https://github.com/vladshcherbin/rollup-plugin-copy/issues/16
      typescript: require('typescript'),
      // objectHashIgnoreUnknownHack: true,
    }),
  ],
});
