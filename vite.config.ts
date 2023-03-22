import { resolve as pathResolve } from 'path'

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

const resolve = (path: string) => pathResolve(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
})
