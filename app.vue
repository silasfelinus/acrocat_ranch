<template>
  <div class="#app">
    <NuxtErrorBoundary>
      <ThemeChange />
      <ButterflySwarm />
      <main class="prose">
        <ContentDoc />
      </main>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { useDisplaySettingsStore } from './stores/display'

// load display settings from store
const display = useDisplaySettingsStore()
const background = display.background
const screenfx = display.screenfx
//
</script>
