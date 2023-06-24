<template>
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-2xl font-semibold">{{ botStore.selectedBot.name }}</h2>
    <h3 class="text-xl">{{ botStore.selectedBot.description }}</h3>

    <div class="my-4">
      <label for="temperature" class="block text-sm font-medium text-gray-700">Temperature</label>
      <input id="temperature" v-model="botStore.selectedBot.temperature" type="range" class="slider slider-horizontal">
    </div>

    <div class="my-4">
      <label for="intro" class="block text-sm font-medium text-gray-700">Intro</label>
      <textarea id="intro" v-model="botStore.selectedBot.intro" class="input input-bordered w-full"></textarea>
    </div>

    <div class="my-4">
      <label for="style" class="block text-sm font-medium text-gray-700">Style</label>
      <textarea id="style" v-model="botStore.selectedBot.style" class="input input-bordered w-full"></textarea>
    </div>

    <div class="my-4">
  <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
  <input id="image" type="file" @change="handleImageChange" class="input input-bordered">
</div>


    <div class="my-4">
      <label for="mask" class="block text-sm font-medium text-gray-700">Mask</label>
      <input id="mask" v-model="botStore.selectedBot.mask" type="url" class="input input-bordered">
    </div>

    <div class="my-4">
      <label for="prompt" class="block text-sm font-medium text-gray-700">Prompt</label>
      <input id="prompt" v-model="botStore.selectedBot.prompt" class="input input-bordered">
    </div>

    <button class="btn btn-primary mt-6" @click="handleSubmit">Submit</button>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'

const botStore = useBotStore()
const selectedBot = ref(botStore.selectedBot)

const handleImageChange = (event) => {
  botStore.selectedBot.image = event.target.files[0];
}

watchEffect(() => {
  console.log('Bot Store changes:', selectedBot.value)
})

const handleSubmit = () => {
  console.log('Sending this data:', selectedBot.value)
}
</script>
