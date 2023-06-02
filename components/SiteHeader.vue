<template>
  <header class="site-header fixed w-full z-10 bg-transparent">
    <div class="container mx-auto px-6 sm:px-8 lg:px-10">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="site-logo">
            <SiteLogo />
          </div>
          <div class="ml-3 site-title text-gray-800">
            <SiteTitle />
          </div>
        </div>

        <!-- Links -->
        <div class="md:flex items-center">
          <a href="#" class="mx-3 text-black-800">Login/Register</a>
          <a href="#" class="mx-3 text-gray-800">Navigation</a>
          <a href="#" class="mx-3 text-gray-800">Background</a>
          <a href="#" class="mx-3 text-gray-800">ScreenFX</a>
          <a href="#" class="mx-3 text-gray-800">Wildcard</a>
          <a href="#" class="mx-3 text-gray-800">Gallery</a>
        </div>

        <!-- Theme Change -->
        <div class="theme-change">
          <ThemeChange />
        </div>
      </div>
    </div>
    <!-- Butterfly Swarm -->
    <ButterflySwarm />
  </header>
</template>
