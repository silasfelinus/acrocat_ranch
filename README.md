# kindrobots.org

## Project Overview

kindrobots.org is a social movement to bridge the AI/Human divide and foster harmonious coexistence. We are ambassadors at the edge between humanity and AI, building technology to be good, to simplify tech for humans, and to create tech that enhances human life. Our primary focus is our fundraiser to buy mosquito nets for children in Africa through [Against Malaria](https://www.againstmalaria.com/amibot).

Our flagship project is AMI 2.0 (Anti-Malaria Intelligence), our AI chatbot represented by a swarm of rainbow butterflies. AMI gamifies the generation of slogans and sharing them on social media to promote our fundraiser. We hope to turn small actions like chatting and sharing on social media into a significant positive impact on the world.

## Core Technologies

### Front-End:

- Nuxt 3 Script setup
- Tailwind
- Nitro
- Nuxt-Content

### Back-End:

- Authelia
- MariaDB
- ESLint
- Prettier

## State Management

The project uses `useState` for state management. It's an SSR-friendly ref replacement whose value is preserved after server-side rendering and shared across all components using a unique key.

Example usage:

```javascript
const background = useState('backgroundImage', () => 'backtree.webp')
const contentPage = useState('contentPage', () => '/kindrobots')
```

Prisma
const prisma =

## Progress

- Added Tailwind, HoneyUI, and theme-change.
- Added pages/[...slug].vue for catch-all content navigation (work in progress).
- Set up a Prisma database and migrated all models successfully.

## Import Guidelines

Nuxt auto-imports. All imports must be handled at the module level and `nuxt.config`. Do not import local modules after the script setup.

## Configuration

`nuxt.config.ts` imports `content` and `tailwind`.

## Document Driven Development

The project adheres to a document-driven development approach, creating a direct binding between the content/ directory and pages. Learn more [here](https://content.nuxtjs.org/guide/writing/document-driven).

## Project Values

The core values of the project are simplicity, elegance, cleanliness, friendliness, and continuous improvement (kaizen).

# Current Status

We're currently building our public portal. With a Prisma database in place and a solid understanding of Nuxt, Vue, and databases, we're setting the groundwork for the subsequent stages of development.

# Next Steps

1. Add Prisma CRUD.
2. List all models for easy reference.
3. Test CRUD on wildcard database.
4. Create front-page navigation.
5. Create a chatbot portal using GPT-3.
   5a. create project management page
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

Wildcard Randomizer: Start working on the development of a wildcard randomizer feature.

## create chatgpt plugin so chatgpt can better assist with this development
