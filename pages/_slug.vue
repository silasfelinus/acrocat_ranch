<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetch: fetchContent } = useContent()

const article = ref(null)

fetchContent(route.value.params.slug).then((data) => {
  article.value = data
})
</script>
