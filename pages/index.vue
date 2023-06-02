<template>
  <NuxtLayout name="default">
    <div
      class="flex flex-col lg:flex-row lg:space-x-12 min-h-[calc(100vh-5rem)] items-center justify-center px-4"
    >
      <div
        class="inline-block flex-shrink-0 flex-grow-0 max-w-sm relative lg:mt-20 mx-16 md:mx-0"
      >
        <div class="rounded-b-full aspect-[10/11] relative overflow-hidden">
          <div class="w-4/5 ml-[11%]">
            <image
              sizes="sm:300px md:50vw lg:400px"
              preload
              src="IMG-20220515-WA0004-removebg-preview.png"
            />
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 rounded-full aspect-square bg-gradient-to-t from-gray-900 to-gray-500 w-full overflow-hidden -z-50"
        ></div>
      </div>
      <div class="mt-6 space-y-6">
        <h1 class="text-7xl font-bold">Hey!</h1>
        <h2 class="text-2xl font-light">
          Welcome to Kind Robots
          <a
            class="underline font-bold"
            href="https://cafefred.cafepurr.com/"
            target="_blank"
            rel="noopener"
            >Cafe Fred</a
          >.
        </h2>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Kind Robots'
})
</script>
