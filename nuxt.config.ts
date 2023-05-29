import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    [
      '@storyblok/nuxt',
      { accessToken: 'IFLFAM5t2gkCcNj7rk2dkgtt-199354-mPFPqu-hnok1FRxXbsEr' }
    ]
  ],
  content: {
    documentDriven: true
  }
})
