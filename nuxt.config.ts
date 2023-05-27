import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    [
      '@storyblok/nuxt',
      { accessToken: 'N3DZLOHMxaCqWifnsVQvHgtt-199354-jNL5Lt4q3JvssstLJ35s' }
    ]
  ],
  content: {
    documentDriven: true
  }
})
