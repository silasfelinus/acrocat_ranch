<template>
  <div>
    <label>Status:</label>
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script setup>
const url = 'https://lola.purrsalon.com/queue/status'
const { isFetching, error, data } = useFetch(url)
</script>
