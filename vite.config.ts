import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasmPack from 'vite-plugin-wasm-pack'

// https://vitejs.dev/config/
export default defineConfig({
  build: { minify: false },
  plugins: [vue(), wasmPack(['./wasm-app'])],
})
