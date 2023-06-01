---

# 🌐 CodeNotes

## 🤖 Project

`kindrobots.org`

## 🎯 Purpose

- Create a social network portal and a gamified tech interface to introduce people to the modern world
- Encourage fundraising and donations for our cause
- Showcase robust Vue.js/Nuxt skills to attract virtuous projects and grants
- Sell print-on-demand merchandise in our online gift shop
- Monetize our various projects and portals, while remaining committed to positive, ethical practices

## 🌟 Front-End

Nuxt 3, script setup, tailwind, nitro, nuxt-content

## ⚙️ Back-End

traefik, Authelia, MariaDB, ESLint, Prettier

## 📐 Scope

We are currently building the front-page navigation, while also setting up a framework for future enhancements, such as image galleries, user management, state management, interactive elements, and a chat feature.

[useState]
useState is an SSR-friendly ref replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key.
Any other component that uses useState('{state}') shares the same reactive state.
const background = useState('background', () => 'backtree.webp'}

[currentStates]
backgroundImage
userName
screenfxComponent
statusText
activePage
activeTheme

## 🏗 Structure

Nuxt 3 with script setup, where TypeScript is inferred. We utilize auto-imports and error-checking when relevant, and useState for sharing data between components. The project is content-focused, but we'll need components for advanced features and navigation, as well as state handling. We currently aim to avoid a pages/ directory, preferring to use content wherever possible.
navigationItems
hoveredIndex
navDrawerState

## 📈 Progress

- Created website Mascot AMI - The Anti Malaria Intelligence, a chatbot designed to raise funds to buy children mosquito nets in Africa
- Created amibot fundraiser at https://www.againstmalaria.com/amibot
- Added Tailwind, HoneyUI, and theme-change
- Removed Pinia as useState now takes its place
- Setup authelia and maria db backend
- Added Document-Driven content management
- bought kindrobots.org
- added invisible https support and extended network routing through traefik
- website public at https://kindrobots.org (when served locally wiuth run dev)

## 📝 Notes

`Navigation.md` stores our navigation data. We need to transfer relevant details to `nav.json`, then create `navDropdown`, `NavGallery`, `SplashNav`, and `AccordionNav` that utilize this data. There's also a need to create a list of our state variables. Assistance is required in creating basic building blocks for the rest of the project.

## 🗂 Directories and Files

### `assets/`

This directory conventionally contains every asset that the build tool (Vite or webpack) should process.

### `public/`

The content in this directory is served at the server root as-is.

### `app.vue`

Nuxt treats this file as the entry point and renders its content for every route of the application.

### `layout/`

Contains layout configurations like `ContentLayout`, `PageLayout`, `PromptLayout`, `ArtLayout`, `SplashLayout`. See [Nuxt Layouts Guide](https://nuxt.com/docs/guide/directory-structure/layouts) for more details.

### `content/components`

Components in the content subdirectory are accessible by content.
BubbleLink, AmiButterfly, ButterflySwarm, LavaLamp, NavDrawer, NavBar, RainEffect, SiteHeader, SiteLogo, SiteTitle, SoapBubbles, SubTitle, TagLine, ThemeChange, UserBar, WildcardStatus

## 📚 Imports

Nuxt auto-imports. All imports should be handled at the module level and in `nuxt.config.ts`. _DO NOT IMPORT AFTER SCRIPT SETUP_

## 📃 `nuxt.config.ts`

Contains imports for content and tailwind. It's also set to document-driven mode.

## 📝 DocumentDriven

This mode creates a direct binding between the `content/` directory and pages. It also provides page, navigation, surround, and globals variables. Learn more from the [Nuxt Content Writing Guide](https://content.nuxtjs.org/guide/writing/document-driven).

## 💡 Values

The project values simplicity, elegance, cleanliness, and friendliness.

## Transitions

https://nuxt.com/docs/getting-started/transitions#layout-transitions

# 🚀 Todos

Navigation: Refactor Navigation.md data to nav.json. Following this, continue with the development of navigation components: navDropdown, NavGallery, SplashNav, and AccordionNav.

State Management: Create a comprehensive list of all the state variables used in the project to streamline state management.

Backend Integration: Connect Authelia backend and MariaDB to this project when appropriate.

Chat Features: Plan and develop live chat, chatGPT, and chat window toggle features.

BotCafe:
Add layout for friendly bots

Wildcard Randomizer: Start working on the development of a wildcard randomizer feature.

## create chatgpt plugin so chatgpt can better assist with this development
