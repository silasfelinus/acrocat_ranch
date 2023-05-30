<template>
  <div>
    <select v-model="selectedLink" @change="navigateToLink">
      <option disabled value="">Please select a link</option>
      <option v-for="link in links" :key="link.title" :value="link.link">
        {{ link.title }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '@nuxtjs/composition-api'

const router = useRouter()
const links = ref([])
const selectedLink = ref('')

const { execute, data } = useFetch(async () => {
  const response = await fetch('/navigation')
  const data = await response.json()

  if (data && data.links && Array.isArray(data.links)) {
    links.value = data.links
    console.log('Fetched links:', links.value)
  } else {
    console.error('Fetched data does not contain a links array:', data)
  }
})

execute()

const navigateToLink = () => {
  if (selectedLink.value) {
    router.push(selectedLink.value)
  } else {
    console.warn('No link selected')
  }
}
</script>
