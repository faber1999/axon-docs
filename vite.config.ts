import axon from '@faber1999/vite-plugin-axon'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss(), axon()]
})
