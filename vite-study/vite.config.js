import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias:({
    "@": path.resolve(__dirname, "src"),
    "comps": path.resolve(__dirname, "src/components"),
    "views": path.resolve(__dirname, "src/views"),
    "routes": path.resolve(__dirname, "src/routes"),
    "apis": path.resolve(__dirname, "src/apis"),
    "utils": path.resolve(__dirname, "src/utils"),
    "styles": path.resolve(__dirname, "src/styles")
  }),
  // css:{},
  // esbuild:{},
  plugins: [vue(),vueJsx()]
})
