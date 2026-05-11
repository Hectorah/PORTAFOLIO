
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PORTAFOLIO/', // Reemplaza con el nombre de tu repositorio
  server: {
    port: 3000,
    open: true
  }
})
