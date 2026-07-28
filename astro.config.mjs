// @ts-check
import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
// https://astro.build/config

export default defineConfig({
  integrations: [react()],

  env: {
    schema: {
      // Netlify's deploy context, e.g. 'production' or 'deploy-preview'
      CONTEXT: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
