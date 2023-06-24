<template>
  <div class="h-screen flex flex-col">
    <page-list />
    <div class="flex-grow flex flex-row pt-12">
          <transition name="fade" mode="out-in">
            <slot class="relative z-10" /> </transition>
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
