import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";



export default {
    input: 'src/index.ts',
    output: [
        {
            file: './lib/index.js',
            format: 'umd',
            name: 'EasyScrollBox'
        },
        {
            file: './lib/index.esm.js',
            format: 'esm',
            name: 'EasyScrollBox'
        },
        {
            file: './lib/index.min.js',
            format: 'iife',
            name: 'EasyScrollBox'
        }
    ],
    plugins: [
        del({ targets: 'lib/*' }),
        resolve(),
        commonjs(),
        typescript(),
        terser()
    ]
}