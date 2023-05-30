import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['~/assets/css/tailwind.css'],
  content: {
    documentDriven: true
  },

  devtools: {
    enabled: true
  }
})
