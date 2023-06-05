<template>
  <div class="carousel w-full overflow-x-scroll snap-x">
    <div id="slide1" class="snap-start w-5/12 relative flex-shrink-0">
      <img src="/images/acrocats/PXL_20220903_023602144.jpg" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <NuxtLink to="#slide4" class="btn btn-circle">❮</NuxtLink>
        <NuxtLink to="#slide2" class="btn btn-circle">❯</NuxtLink>
      </div>
    </div>
    <div id="slide2" class="snap-start w-5/12 relative flex-shrink-0">
      <img src="/images/amibot/amibot1.png" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <NuxtLink to="#slide1" class="btn btn-circle">❮</NuxtLink>
        <NuxtLink to="#slide3" class="btn btn-circle">❯</NuxtLink>
      </div>
    </div>
    <div id="slide3" class="snap-start w-5/12 relative flex-shrink-0">
      <img src="/images/amibot/amibot2.png" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <NuxtLink to="#slide2" class="btn btn-circle">❮</NuxtLink>
        <NuxtLink to="#slide4" class="btn btn-circle">❯</NuxtLink>
      </div>
    </div>
    <div id="slide4" class="snap-start w-5/12 relative flex-shrink-0">
      <img src="/images/amibot/amibot3.png" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <NuxtLink to="#slide3" class="btn btn-circle">❮</NuxtLink>
        <NuxtLink to="#slide1" class="btn btn-circle">❯</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel .btn-circle {
  background: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
}

.carousel img {
  object-fit: cover;
  height: 100%;
}

.carousel a {
  z-index: 1;
}
</style>
