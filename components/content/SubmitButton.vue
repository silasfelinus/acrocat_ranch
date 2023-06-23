<template>
  <button
    class="px-4 py-2 mt-4 bg-blue-500 text-white rounded shadow-md cursor-pointer hover:bg-blue-600"
    @click="onClick"
  >
    > Submit
  </button>
</template>

<script setup>
// Define the `emit` function for emitting custom events
const emit = defineEmit(['click'])

const onClick = () => {
  emit('click')
}
</script>
