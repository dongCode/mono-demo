import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import { name } from './package.json';

export default defineConfig([
  {
    input: 'src/index.tsx',
    external: ['react', 'react-dom'],
    plugins: [
      typescript(),
      resolve({
        extensions: ['.tsx', '.ts', '.js'],
      }),
      postcss({}),
      babel({
        babelrc: false,
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-object-rest-spread',
          '@babel/plugin-transform-react-jsx',
          [
            '@babel/plugin-transform-runtime',
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: false,
              regenerator: false,
              useESModules: false,
            },
          ],
        ],
      }),
      commonjs(),
    ],
    output: [
      {
        name,
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        name,
        file: './es/index.js',
        format: 'es',
      },
      {
        name,
        file: './lib/index.cjs',
        format: 'commonjs',
      },
    ],
  },
  {
    input: 'src/index.tsx',
    output: [
      { file: 'dist/index.d.ts', format: 'es' },
      { file: 'es/index.d.ts', format: 'es' },
      { file: 'lib/index.d.ts', format: 'es' },
    ],
    plugins: [dts()],
  },
]);
