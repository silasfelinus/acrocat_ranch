<template>
  <div class="h-screen flex flex-col">
    <site-header></site-header>
    <div class="flex-grow flex flex-row pt-12">
      <site-navigation style="min-width: 200px" />
      <main class="relative flex-grow">
        <screen-fx class="absolute inset-0 z-0">
          <transition name="fade" mode="out-in">
            <slot class="relative z-10" /> </transition
        ></screen-fx>

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
