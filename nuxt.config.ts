import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    api: {
      baseURL: '/api/_my_content',
      documentDriven: true
    }
  }
})
