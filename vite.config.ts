import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

import contentCollections from '@content-collections/vite'

const PDF_PATH = /\.pdf$/i

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    contentCollections(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        filter: ({ path }) => !PDF_PATH.test(path.split(/[?#]/)[0]),
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
