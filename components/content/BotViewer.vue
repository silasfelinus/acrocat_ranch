<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div
      v-for="bot in bots"
      :key="bot.name"
      class="card bordered"
      :class="{ 'border-primary border-2': bot.isSelected }"
      @click="selectBot(bot)"
    >
      <figure>
        <img :src="bot.avatarImage" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ bot.name }}</h2>
        <p>{{ bot.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const bots = ref([])

onMounted(async () => {
  try {
    const res = await fetch('/botcafe/')
    if (!res.ok) {
      throw new Error('Failed to fetch bots')
    }
    const data = await res.json()
    bots.value = data.map((bot) => ({ ...bot, isSelected: false }))
  } catch (err) {
    console.error(err)
  }
})

const selectBot = (bot) => {
  bot.isSelected = !bot.isSelected
}
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>
