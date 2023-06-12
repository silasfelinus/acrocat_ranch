<template>
  <div class="h-screen flex flex-col">
    <site-header />
    <ButterflySwarm class="fixed z-50" />
    <AmiSwarm class="fixed z-50" />
    <div class="flex-grow flex flex-row pt-12">
      <site-navigation />
      <wildcard-viewer />
      <main>
        <slot />
        <screen-fx class="z-100" />
      </main>
    </div>
  </div>
</template>
