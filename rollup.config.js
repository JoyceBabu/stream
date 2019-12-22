import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs({ include: './node_modules/**' }),
    typescript({ include: '**/*.{ts,js}' })
  ],
  external: ['rollup', 'stream'],
  output: [
    { format: 'cjs', file: pkg.main },
    { format: 'es', file: pkg.module }
  ]
};