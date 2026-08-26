import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

const REPO_NAME = 'duonghao.github.io'
const BASE = process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  base: BASE,
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      router: {
        basepath: BASE,
      },
      spa: {
        enabled: true,
        prerender: {
          outputPath: '/index.html',
          enabled: true,
          crawlLinks: true,
        },
      },
    }),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})

export default config
