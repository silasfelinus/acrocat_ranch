<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <NuxtLoadingBar />
    <site-header />
    <NuxtPage style="flex-grow: 1; overflow: auto" />
    <image-nav />
  </div>
</template>
