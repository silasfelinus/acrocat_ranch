<template>
  <div class="min-h-screen bg-gradient-to-r from-primary to-secondary">
    <NuxtPage />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
