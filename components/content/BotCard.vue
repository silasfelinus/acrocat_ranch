<template>
  <div v-if="botStore.selectedBot" class="p-4 bg-white rounded shadow-md">
    <h2 class="text-2xl font-semibold">{{ botStore.selectedBot.name }}</h2>
    <h3 class="text-xl">{{ botStore.selectedBot.description }}</h3>
    <TemperatureSlider
      v-if="botStore.selectedBot.temperature"
      :initial-value="botStore.selectedBot.temperature"
    />
    <TextWall
      v-if="botStore.selectedBot.intro"
      :initial-value="botStore.selectedBot.intro"
    />
    <CodeWall
      v-if="botStore.selectedBot.style"
      :initial-value="botStore.selectedBot.style"
    />
    <ImageUpload
      v-if="botStore.selectedBot.image"
      :initial-value="botStore.selectedBot.image"
    />
    <UrlInput
      v-if="botStore.selectedBot.mask"
      :initial-value="botStore.selectedBot.mask"
    />
    <PromptInput
      v-if="botStore.selectedBot.prompt"
      :initial-value="botStore.selectedBot.prompt"
    />
    <SubmitButton @submit="handleSubmit" />
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'
import TemperatureSlider from './TemperatureSlider.vue'
import TextWall from './TextWall.vue'
import CodeWall from './CodeWall.vue'
import ImageUpload from './ImageUpload.vue'
import UrlInput from './UrlInput.vue'
import PromptInput from './PromptInput.vue'
import SubmitButton from './SubmitButton.vue'

const botStore = useBotStore()

const emit = defineEmit(['submit'])

const handleSubmit = () => {
  emit('submit')
}
</script>
