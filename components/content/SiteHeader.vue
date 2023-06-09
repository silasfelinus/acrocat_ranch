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
        <SoapBubbles class="absolute w-full h-full z-10" />

        <!-- Links -->
        <div class="md:flex items-center">
          <a href="#" class="mx-3 text-black-800">Login/Register</a>
          <QuickNav />
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
