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
Acrocat Ranch (About Us)- Our parent organization. Home of the Knight family and Acrocat Foster Kitten Rescue, located among the redwoods on the Pacific Northcoast.
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


[COMPONENTS]
all components in components/content are accessible within markdown files using colon-component syntax, eg :butterfly-swarm 

[PROPS]
Props can be passed by using a key=value syntax.
:butterfly-swarm{count=100 pattern="random"}

[DIRECTORY]


[TODOS]




NavigationWidget: our sidebar. SHOULD NOT FLEX. Start open, partial collapse toggle to icons. Consistent width when open. daisyui. The NavigationWidget is our portal to the rest of the pages.

MainNav: hasn't yet been coded. Should dynamically generate routes based on contents/pages and display them as an accordion nav with images.

AmiLink: a Stylized link to our fundraiser, it should always be accesible somewhere on the screen. It would be wonderful if it changed locations depending on layouts.

botCafe: container advertising our botCafe (image link to a random image listed in /images/botcafe/gallery.json)

ThemeChange: this is a button toggle and menu. it integrates with daisyui. We have it installed and configured, we just need to make sure it's always pressable. It doesn't need to be where it is.

RandomWildcard: A randomizer for entertaining loading verbiage.

ContentDoc: App.vue > NuxtPage > Nuxt Layout > ContentDoc. Content Doc gives a 1:1 mapping to pages and the content directory. 
