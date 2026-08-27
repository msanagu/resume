import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/resume/',
  // vanilla-extract so this app's own styles can import Pearl's token objects
  // directly (`space.lg`) instead of re-declaring them as custom properties —
  // Pearl ships hashed var names, which plain CSS can't reference safely.
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
})
