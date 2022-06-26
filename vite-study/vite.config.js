import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
const resolve = (dir) => path.join(__dirname, dir)
export default defineConfig({
  resolve:{
    alias:({
      "@": resolve( "src"),
      "comps": resolve( "src/components"),
      "views": resolve( "src/views"),
      "routes": resolve( "src/routes"),
      "apis": resolve( "src/apis"),
      "utils": resolve( "src/utils"),
      "styles": resolve( "src/styles"),
      "plugins": resolve( "src/plugins"),
      "layouts": resolve( "src/layouts")
    })
  },
  // css:{},
  // esbuild:{},
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      // default
      mockPath: 'mock'
    })
  ]
})
