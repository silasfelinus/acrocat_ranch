<template>
  <div :style="{ backgroundImage: `url(${background})` }">
    <div v-if="screenfx === 'LavaLamp'">
      <LavaLamp />
    </div>
    <div v-else-if="screenfx === 'SoapBubbles'">
      <SoapBubbles />
    </div>
    <div v-else-if="screenfx === 'Butterflies'">
      <ButterflySwarm />
    </div>

    <!-- Dropdown for screen effects -->
    <select v-model="screenfx" @change="setScreenFX(screenfx)">
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
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDisplaySettingsStore } from '../../stores/display'

const display = useDisplaySettingsStore()

// reactive references
const background = ref(display.background)
const screenfx = ref(display.screenfx)
const isLeftOpen = ref(display.isLeftOpen)
const isRightOpen = ref(display.isRightOpen)
const isChatWindowOpen = ref(display.isChatWindowOpen)
const isSplashScreenOpen = ref(display.isSplashScreenOpen)

// watch for changes in the store and update local refs
watchEffect(() => {
  background.value = display.background
  screenfx.value = display.screenfx
  isLeftOpen.value = display.isLeftOpen
  isRightOpen.value = display.isRightOpen
  isChatWindowOpen.value = display.isChatWindowOpen
  isSplashScreenOpen.value = display.isSplashScreenOpen
})

// methods to update the store
const setBackground = (bg: string) => display.setBackground(bg)
const setScreenFX = (fx: string) => display.setScreenFX(fx)
const toggleLeft = () => display.toggleLeftOpen()
const toggleRight = () => display.toggleRightOpen()
const toggleChat = () => display.toggleChatWindowOpen()
const toggleSplash = () => display.toggleSplashScreenOpen()
</script>
