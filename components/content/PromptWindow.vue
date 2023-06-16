<template>
  <div class="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
    <div class="flex items-center">
      <img
        class="w-16 h-16 rounded-full mr-4"
        :src="avatarImage"
        alt="Bot avatar"
      />
      <div class="text-sm">
        <p class="text-black leading-none">{{ name }}</p>
        <p class="text-gray-500">{{ description }}</p>
      </div>
    </div>
    <div>
      <img
        class="rounded-lg shadow-md"
        :src="avatarImage"
        alt="Bot card image"
      />
    </div>
    <div>
      <p>Prompt</p>
      <input
        v-model="prompt"
        class="input input-bordered w-full"
        type="text"
        placeholder="Enter your prompt here"
      />
    </div>
    <div>
      <p>Style</p>
      <select v-model="style" class="select select-bordered w-full">
        <option disabled value="">Please select a style</option>
        <option>Style 1</option>
        <option>Style 2</option>
        <option>Style 3</option>
      </select>
    </div>
    <div>
      <p>Wildcard</p>
      <select v-model="wildcard" class="select select-bordered w-full">
        <option disabled value="">Please select a wildcard</option>
        <option>Wildcard 1</option>
        <option>Wildcard 2</option>
        <option>Wildcard 3</option>
      </select>
    </div>
    <div>
      <p>Max tokens</p>
      <input
        v-model="maxTokens"
        type="range"
        min="8"
        max="4096"
        class="slider slider-horizontal"
      />
    </div>
    <div>
      <p>Temperature</p>
      <input
        v-model="temperature"
        type="range"
        min="0"
        max="1"
        step="0.01"
        class="slider slider-horizontal"
      />
    </div>
    <button class="btn btn-primary w-full" @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
// Variables from props
const name = ref('')
const description = ref('')
const avatarImage = ref('/images/amibot/amibot1.png')
const model = ref('')
const post = ref('')

// Variables for form inputs
const prompt = ref('')
const style = ref('')
const wildcard = ref('')
const maxTokens = ref(500)
const temperature = ref(0.5)

const submitForm = () => {
  // Form submit logic goes here
}
</script>
