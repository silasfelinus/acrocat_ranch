<template>
  <div class="h-screen flex flex-col">
    <site-header><front-matter /></site-header>
    <ButterflySwarm class="fixed z-50" />
    <AmiSwarm class="fixed z-50" />
    <div class="flex-grow flex flex-row pt-12">
      <site-navigation style="min-width: 200px" />
      <main class="relative">
        <screen-fx class="absolute inset-0 z-0"></screen-fx>
        <transition name="fade" mode="out-in">
          <slot class="relative z-10" />
        </transition>
        <site-footer />
      </main>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
