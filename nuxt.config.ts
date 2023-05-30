import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-chatgpt'
  ],
  alias: {},
  chatgpt: {
    apiKey: process.env.OPENAI_API_KEY
  },
  css: ['~/assets/css/tailwind.css'],
  content: {
    documentDriven: true
  },

  devtools: {
    enabled: true
  }
})
