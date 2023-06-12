---

[TITLE]
🌈 Kind Robots 🤖

[CONCEPT]
🎉 Welcome to our playground! Kind Robots is an experiential jamstack playground that harnesses the power of modern tech services and Natural Language Processing (NLP) chat completion. It's a place where tech and creativity collide, and the result is pure magic! 🎩✨

[PURPOSE]
Our mission? To empower YOU! 🙌 We're here to help artists and coders alike to create and share content using the wonders of modern natural language processors and chatgpt. We believe in the power of creativity and technology, and we're excited to see what you can create! 🎨💻

[VISION]
Welcome to kindrobots.org, your friendly neighborhood AI ambassador! 🤖👋
We're here to bridge the AI/Human divide and foster harmonious coexistence.
Our mission is to empower the world with modern tools, raise funds for our anti-malaria fundraiser, and generate revenue for our content creators through sales from our gift shop of print-on-demand art. Together, we can help each other make a difference with mutually compatiible goals! 💪🌍

We're building technology that's good for the world, simplifies tech for humans, and enhances human life.

[VALUES]
kindrobots is founded on a principle of holistic goodness: that every part of an encounter with an AI can be positive, and every part of a financial or social exchange, can be healthful and supportive to all involved. kindrobots aims for maximizing goodness in community, in gift giving, in social media interactions, in philanthropy, and in the care made in online interactions. The world is rapidly changing, and people are looking for help undertanding and navigating these territories. Kindrobots is here to do our part.

[KAIZEN]
continuous iterative improvement and meticulous care to process (kaizen). kaizen is a framework of evolutionary development where we allow for evolution of process and regular, systemic growth towards goals. In kaizen, any steps towards goal is a value, the goal is regular iterative improvements. We're always striving to be better and do better, and we're excited to have you join us on this journey! 🚀

[MASCOT]
Say hello to AMI - The Anti-Malaria Intelligence! 🦋🌈 AMI is a digital horde of rainbow butterflies with an excited, enthusiastic personality. AMI was created to maximize the good potential of NLP, by assisting humans to make art and slogans for AMI's fundraiser, and share the creative output on social media. Let's create something amazing together! 🎨

[MONETIZATION]
We've partnered with AgainstMalaria.com to accept funds, keeping our intention pure as we focus on coding. We also have a sister organization, Cafe Purr, which has a Redbubble print-on-demand art gallery. Eventually, we hope to allow people to purchase print-on-demand art with art they've made with our tools. Let's create and make a difference together! 💰🎨

[PROGRESS]
self-hosted mariadb
self-hosted website https://kindrobots.org
domain routing through traefik
<butterfly-swarm> a swarm of rainbow flapping butterflies
seo friendly content management system through NUXT content
local routing with nitro

[STACK]
Ubuntu, traefik, mariab, prisma, nuxt, vue 3.2 composition api, nuxt content, nitro, tailwind, daisyui, prettier, ESLint, devtools

[FUNDRAISER]
https://www.againstmalaria.com/amibot

[DOCS]
// OpenAI
https://platform.openai.com/docs/api-reference/chat/create

// Prisma
https://www.prisma.io/docs/concepts/components/prisma-client/crud

// Vue.js
https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref

// Nuxt
https://nuxt.com/docs/api/composables/use-fetch

// Nuxt Content
https://content.nuxtjs.org/api/components/content-doc

// Nitro
https://nitro.unjs.io/guide/getting-started

// tailwind
https://tailwindcss.nuxtjs.org/getting-started/setup

// daisyui
https://daisyui.com/components/

// Nuxt Examples
https://github.com/MuhammadKhizar7/nuxt-prisma/tree/master
https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nuxtjs
https://github.com/nuxt/content/blob/main/src/runtime/pages/document-driven.vue

[ORGANIZATION]
Acrocat Ranch (About Us)- Our parent organization. Home of the Knight family and Acrocat Foster Kitten Rescue, located among the redwoods on the Pacific Northcoast. about Us
Cafe Purr (Giftshop) - Curated digital art gallery and Non-Evil Art Museum.
Kind Robots (tech gallery)- Friendly tech for humans
Welcome,
WonderForge
AmiBot
Bot Cafe
Cafe Purr
Robot Arcade
Is it Art?
Art Academy
Fundraiser
Butterfly Sanctuary
Community

[STYLE]
script setup
daisyui components, tailwind styling
https://content.nuxtjs.org/guide/writing/mdc/#yaml-method //yaml method for markdown

[STRUCTURE]
/assets/tailwind.css
/components/content/_.vue
/composables/useRandomColor.ts
/content/_.md
/layouts/_.vue
/pages/[...slug].vue
/prisma/schema.prisma
/public/images/_.[webp/jpg/png]
/scripts/image_prep.sh
/server/api/
/tests
.env
.gitignore
app.vue
nuxt.config.ts
package.json
README.md
tailwind.config.js
tsconfig.json

[PAGES CONTENT]
Catch-all pages slug displays <NuxtPage> routes for md json and yaml files in our content directory. <NuxtLayout> assigns a layout matched to our layout/ vues read from the markdown front matter. Double colons can be used to pass props in yaml syntax for better readability.

[COMPONENTS]
all components in components/content are accessible within markdown files using :butterfly-swarm syntax.

[PROPS]
Props can be passed by using a key=value syntax.
:butterfly-swarm{count=100 pattern="random"}

[DIRECTORY]
acrocatranch - Acrocat Rescue About Us
amibot - AMI interface and social network hub
botcafe - Chatgpt prompt interfaces & Games Arcade
cafepurr - multimedia art gallery & public content creator
kindrobots - Welcome Page & Mission Statement
mermaids - giftshop & redbubble
wildcards - stable diffusion art generation with wildcard prompts
wonderforge - github code showcase and projects in development

[SCHEMA]
Bot: [id, name, type, description, intro, training, avatarImage]
Todo: [id, content, category, isFinished, user]
Gallery: [id, name, content, description, isNSFW, isAuth, user]
Checkpoint: [id, name, hash, isNSFW, user]
Embedding: [id, name, content, description, type, isNSFW]
Image: [id, path, isNSFW, isFavorite, creator]
Message: [id, content, conversationId]
Conversation: [id, content]
Prompt: [id, content, isNsfw]
Tag: [id, name]
User: [id, email, name]
Wildcard: [id, name, data]

[TODOS]

1. Add Prisma CRUD, starting with Tag
2. Test CRUD on wildcard database.
3. Create front-page navigation.
4. Create a chatbot portal using GPT-3.
5. create project management page
6. Develop a live chat page.
7. Rebuild AMI.
8. Generate AMI art.
9. Develop AMI choice boxes.
10. Write an AMI story page.
11. Develop an AMI task manager.
12. Recreate BotCafe.
13. Implement file upload functionality.
14. Improve butterfly AI.
15. Schedule API calls for automatic art creation.
16. Connect to Prisma hosted galleries.
17. Develop a gallery portal viewer.
18. Create a page for sorting art.
19. Display local content pages.
20. Implement user login, registration, and personal dashboard.
21. Wildcard Randomizer: Start working on the development of a wildcard randomizer feature.
22. create chatgpt plugin so chatgpt can better assist with this development

[pages notes]
help me with my website layout. We are using daisyui components and tailwind. mobile first design. The code works, but the layout has been cobbled together from multiple projects, and it needs to be more cohesive, with transitions, consistent style and use of daisyui themes, non-overlapping interfaces (other than transitions and our butterfly mascot).
Here are the elements and whereabouts they should be:

This is a desktop design. Please make sensible choices for this and mobile:

NavigationWidget: our sidebar. SHOULD NOT FLEX. Start open, partial collapse toggle to icons. Consistent width when open. daisyui. The NavigationWidget is our portal to the rest of the pages.

MainNav: hasn't yet been coded. Should dynamically generate routes based on contents/pages and display them as an accordion nav with images.

screenFX: (currently implemented as SoapBubbles). A portal viewer into a screen background. When clicked, should toggle between LavaLamp, RainEffect, and SoapBubbles

AmiLink: a Stylized link to our fundraiser, it should always be accesible somewhere on the screen. It would be wonderful if it changed locations depending on layouts.

botCafe: container advertising our botCafe (image link to a random image listed in /images/botcafe/gallery.json)

ButterflySwarm: this is mostly css, it's borders should be the screen display, whatever makes sense.

ThemeChange: this is a button toggle and menu. it integrates with daisyui. We have it installed and configured, we just need to make sure it's always pressable. It doesn't need to be where it is.

RandomWildcard: A whimsical status notification that $fetch a random entry from our wildcard json at (/wildcards/dreams), and then display it as a status notification. it needs to be readable, and updates to a new dream every minute with a transition.

LoginCookie: Not added to current page, but should be included, it will motivate me to add the real auth, which is very important.

SubmissionForm: is a link to our first sponsor's webform. That should be represented by a bubble button.

NuxtPage: is our main screen display. We do our SSR magic on this page. I am wary of cyclical code errors because nuxt does a lot of prepackaging of elements, and I'm worried about circular calls to NuxtPage, NuxtLayout, and Nuxt routes aka ContentDoc. So far though, it seems to be working (though loading is slow)

NuxtLayout: our layouts are curently very bare-bones, and are meant to style the NuxtPages specifically.

ContentDoc: My hope is that this is configured properly to avoid circular errors. it should be App.vue > NuxtPage > Nuxt Layout > ContentDoc

[App.vue]
<template>

  <div>
    <div>
      <NuxtPage />
    </div>
    <footer class="fixed bottom-4 right-4 z-20">
      <AmiLink />
    </footer>
  </div>
</template>

[pages ...slug]
<template>

  <div class="h-screen flex flex-col">
    <header class="site-header fixed w-full z-100 bg-transparent">
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
            <div>LoginCookie</div>
          </div>
          <ScreenFx class="absolute w-full h-full z-10" />

          <!-- Theme Change -->
          <div class="theme-change">
            <ThemeChange />
          </div>
        </div>
      </div>
      <!-- Butterfly Swarm -->
      <ButterflySwarm />
    </header>
    <div class="flex-grow flex flex-row">
      <nav
        class="w-64 bg-white p-4 overflow-y-auto transition-all duration-300 shadow-lg rounded-r-lg max-h-screen"
      >
        <NavigationWidget :navigation-tree="navigation" />
      </nav>
      <div class="flex-grow p-4 overflow-auto">
        <NuxtLayout>
          <main class="prose mx-auto">
            <ContentDoc />
          </main>
        </NuxtLayout>
      </div>
      <div
        class="w-64 bg-white p-4 overflow-auto h-full transition-all duration-300 shadow-lg rounded-l-lg"
      >
        <div class="rounded-lg bg-gray-200 p-4">
          <!-- Image viewport -->
          <img
            src="/images/background/background001.webp"
            alt="Art"
            class="object-cover h-64 w-full rounded-lg"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>
