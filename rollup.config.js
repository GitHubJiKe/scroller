import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
export default {
    input: 'src/index.ts',
    output: {
        file: './lib/index.js',
        format: 'iife',
        name: 'EasyScroller'
    },
    plugins: [
        del({ targets: 'lib/*' }),
        resolve(),
        commonjs(),
        typescript(),
        terser()
    ]
}