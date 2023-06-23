<template>
  <header
    class="site-header fixed w-full z-100 bg-transparent flex items-center justify-between px-6 sm:px-8 lg:px-10"
  >
    <site-title />
    <dream-status />
    <!-- AMI Link -->
    <AmiLink class="z-0 fixed bottom-4 right-4" />
    <div class="flex items-center justify-end flex-grow">
      <ThemeChange />
    </div>
  </header>
</template>
