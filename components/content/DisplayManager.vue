<template>
  <div :style="{ backgroundImage: `url(${background.value})` }">
    <div v-if="screenfx.value === 'LavaLamp'">
      <LavaLamp />
    </div>
    <div v-else-if="screenfx.value === 'SoapBubbles'">
      <SoapBubbles />
    </div>
    <div v-else-if="screenfx.value === 'Butterflies'">
      <ButterflySwarm />
    </div>

    <!-- Dropdown for screen effects -->
    <select v-model="screenfx.value">
      <option value="LavaLamp">Lava Lamp</option>
      <option value="SoapBubbles">Soap Bubbles</option>
      <option value="Butterflies">Butterflies</option>
    </select>

    <!-- Toggle buttons -->
    <button @click="toggleLeft">Toggle Left Sidebar</button>
    <button @click="toggleRight">Toggle Right Sidebar</button>
    <button @click="toggleChat">Toggle Chat Window</button>
    <button @click="toggleSplash">Toggle Splash Screen</button>
  </div>
</template>

<script setup>
// shared states
const background = useState('background', '')
const screenfx = useState('screenfx', '')
const isLeftOpen = useState('isLeftOpen', false)
const isRightOpen = useState('isRightOpen', false)
const isChatWindowOpen = useState('isChatWindowOpen', false)
const isSplashScreenOpen = useState('isSplashScreenOpen', false)

// methods to update the shared states
const toggleLeft = () => {
  isLeftOpen.value = !isLeftOpen.value
}

const toggleRight = () => {
  isRightOpen.value = !isRightOpen.value
}

const toggleChat = () => {
  isChatWindowOpen.value = !isChatWindowOpen.value
}

const toggleSplash = () => {
  isSplashScreenOpen.value = !isSplashScreenOpen.value
}
</script>
