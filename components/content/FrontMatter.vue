<!-- FrontMatter.vue -->
<template>
  <div class="card">
    <div v-for="(value, key) in meta" :key="key">
      <strong>{{ key }}:</strong> {{ value }}
    </div>
  </div>
</template>

<script setup>
const meta = context.meta.params
</script>
