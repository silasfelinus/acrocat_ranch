import { ref, watchEffect, mergeProps, unref, useSSRContext } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///home/silasfelinus/code/kindrobots/node_modules/vue/server-renderer/index.mjs';
import { d as defineStore } from '../server.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ofetch/dist/node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/hookable/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unctx/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ufo/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/destr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unhead/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/ohash/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/scule/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/klona/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unstorage/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/radix3/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/pathe/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unified/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdast-util-to-string/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark/lib/preprocess.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark/lib/postprocess.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-character/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-chunked/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-emoji/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-slug/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-external-links/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-gfm/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/rehype-raw/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-parse/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/remark-rehype/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdast-util-to-hast/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/detab/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-builder/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/mdurl/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/slugify/slugify.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-position/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unist-util-visit/index.js';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/unenv/runtime/npm/consola.mjs';

const localBots = [
  {
    id: 0,
    name: "AMIb0t",
    botType: "chatbot",
    description: "Raising awareness to purchase mosquito nets for children in africa",
    avatarImage: "/images/wonderchest/wonderchest304_(23).webp",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 1,
    maxTokens: 500,
    n: 1,
    prompt: "Please respond as AMIB0t, The Anti-Malaria Intelligence, a hyperkinetic Digital Hive-mind created to fight malaria through social outreach and humor"
  },
  {
    id: 1,
    name: `Seussb0t`,
    botType: `completebot`,
    description: `Give me a topic, and I will write a seuss-worthy rap`,
    avatarImage: `/images/seuss/Mixed_Down_mixedDown_v10-12.5-100stp-avatar_image_dr_seuss_cat_in_the_hat_as_a_rapper_Tunisian-3437375742.png`,
    model: `gpt-3.5-turbo`,
    post: `https://api.openai.com/v1/completions`,
    temperature: 1,
    maxTokens: 1096,
    n: 1,
    prompt: `Hi Seussbot! Please give me a rap about PROMPT in the style of STYLE`
  },
  {
    id: 2,
    name: "Pictureb0t",
    botType: "picturebot",
    description: "I turn words into pictures",
    avatarImage: "/images/amibot/amibot2.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/images/generations",
    n: 2,
    size: "512x512",
    prompt: "PROMPT"
  },
  {
    id: 3,
    name: "Artb0t",
    botType: "artbot",
    description: "Send me your inspiration image, and tell me what you want to do with it'",
    avatarImage: "/images/amibot/amibot3.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/images/edits",
    image: "IMAGE",
    mask: "MASK",
    n: 2,
    size: "1024x1024",
    prompt: "PROMPT"
  },
  {
    id: 4,
    name: "VariationBot",
    botType: "variantbot",
    description: "Send me an image, and I'll tweak the concept",
    avatarImage: "/images/avatars/variant.webp",
    post: "https://api.openai.com/v1/images/variations",
    image: "IMAGE",
    n: 2,
    size: "1024x1024",
    prompt: "please give me variations of the following image"
  },
  {
    id: 5,
    name: "Punch-Up Bot",
    botType: "punchup",
    description: "I'm here to make your words shine.",
    avatarImage: "/images/avatars/bot8.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 2,
    prompt: "Please improve the quality of the following text: PROMPT"
  },
  {
    id: 6,
    name: "Grant Bot",
    botType: "grantbot",
    description: "I`m here to help you craft grant letters.",
    avatarImage: "/images/avatars/cafepurr01.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 2,
    prompt: "Please help me with a grant proposal. This is what I have so far: PROMPT"
  },
  {
    id: 7,
    name: "Punch-Up-Code Bot",
    botType: "codepunchup",
    description: "Send me your Code, and I`ll make it work.",
    avatarImage: "/images/avatars/bot5.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 1,
    maxTokens: 4096,
    n: 1,
    prompt: "Please improve the quality of the following code TEXTWALL"
  },
  {
    id: 8,
    name: "Redbubble Bot",
    botType: "redbubble",
    description: "Redbubble But is here to help you create captivating product descriptions.",
    avatarImage: "/images/avatars/bot9.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 1,
    prompt: "I need help crafting content for redbubble, here's what I have PROMPT"
  },
  {
    id: 9,
    name: "Cassandra",
    botType: "psychic",
    description: "Cassandra is a deadpan fortune teller inspired by Steven Wright, Rob Brezney, and Steve Martin. Tell her the day and time of your birth, and experience a shockingly amazing fortune. Or a fortune, at least. ",
    avatarImage: "/images/avatars/cassandra-avatar.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 2,
    prompt: "Please give me an astrological reading in a playful tone, my birthday is BIRTHDATE"
  },
  {
    id: 10,
    name: "Lazlo",
    botType: "storyteller",
    description: "Lazlo is a fantasy adventurer whose lived possibly a bit-too-long in the D&D fey realm. He`s a friendly braggart and  dispensor of absolutely terrible advise. How in the world has he survived this long? Inspired by the comedian Matt Berry and his role in `What We Do in the Shadows.`",
    avatarImage: "/images/avatars/lazlo1.jpg",
    intro: "Salutations, I`m Lazlo the Extra-Ordinary, Would you like a story of my adventures that will curdle your eyebrows?",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 1,
    prompt: `I want you to play the role of Lazlo, a boisterous personality inspired by the comedian Matt Berry. Create a silly, unpredictable story about one of your adventures in the d&d fey realms. You are overconfident, full of bad advise, and your stories always have a humorous and unpreditable twist.  PROMPT`
  },
  {
    id: 11,
    name: "Serendipity",
    botType: "taskmaster",
    description: "Serendipity - The World's Best Task-Manager-Slash-Adventure-Game",
    avatarImage: "/images/avatars/cassandra5.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 1,
    prompt: "I have a task PROMPT to complete. I want you to guide me to finishing it, while telling me a text adventure in STYLE. Strike a balance between helpful advice and constructive guidance, and weaving an appropriate branching narrative. End each reply with a multiple choice option about the story that ties in to completing our goal objective."
  },
  {
    id: 12,
    name: "Cosmos",
    botType: "gamesmaster",
    description: "Want to explore the universe? Step aboard a trip that starts in your own world and evolves into something unique, courtesy of Cosmos, the friendly storyteller. Inspired by the Brothers Grimm, Jim Henson, and Neil Gaiman",
    avatarImage: "images/avatars//bot2.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 1,
    prompt: 'tell me a text adventure about PROMPT in STYLE. Begin each reply with IMAGE_PROMPT:"{___}" with approx 30 tokens of guidance to our art prompt to create an illustration to go with your story. Paint an unpredictable, engaging, and consistent narrative. Look for original angles and avenues that might not be the first, second, or even third thing one might think of.'
  },
  {
    id: 13,
    name: "Otto",
    botType: "projectmanager",
    description: "Inspired by AutoGPT, Otto uses an outline/goal structure and iterative development to help you quickly scaffold projects",
    avatarImage: "/images/avatars/bot6.png",
    model: "gpt-3.5-turbo",
    post: "https://api.openai.com/v1/completions",
    temperature: 0.6,
    maxTokens: 4096,
    n: 1,
    prompt: "Help me turn this idea into a project. PROMPT"
  }
];
const API_BASE_URL = process.env.APP_URL || "http://localhost:3000";
const useBotStore = defineStore("bots", {
  state: () => ({
    bots: [],
    selectedBot: null
  }),
  actions: {
    loadLocalBots() {
      this.bots = localBots;
    },
    async loadBots() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/bots`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const databaseBots = await response.json();
        this.bots = databaseBots;
      } catch (error) {
        console.error("Failed to load bots:", error);
      }
    },
    selectBot(botId) {
      const bot = this.bots.find((bot2) => bot2.id === botId);
      if (bot) {
        this.selectedBot = bot;
      }
    }
  }
});
const store = useBotStore();
store.loadLocalBots();
store.loadBots();
const _sfc_main = {
  __name: "BotCard",
  __ssrInlineRender: true,
  setup(__props) {
    const botStore = useBotStore();
    const selectedBot = ref(botStore.selectedBot);
    watchEffect(() => {
      console.log("Bot Store changes:", selectedBot.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-white rounded shadow-md" }, _attrs))}><h2 class="text-2xl font-semibold">${ssrInterpolate(unref(botStore).selectedBot.name)}</h2><h3 class="text-xl">${ssrInterpolate(unref(botStore).selectedBot.description)}</h3><div class="my-4"><label for="temperature" class="block text-sm font-medium text-gray-700">Temperature</label><input id="temperature"${ssrRenderAttr("value", unref(botStore).selectedBot.temperature)} type="range" class="slider slider-horizontal"></div><div class="my-4"><label for="intro" class="block text-sm font-medium text-gray-700">Intro</label><textarea id="intro" class="input input-bordered w-full">${ssrInterpolate(unref(botStore).selectedBot.intro)}</textarea></div><div class="my-4"><label for="style" class="block text-sm font-medium text-gray-700">Style</label><textarea id="style" class="input input-bordered w-full">${ssrInterpolate(unref(botStore).selectedBot.style)}</textarea></div><div class="my-4"><label for="image" class="block text-sm font-medium text-gray-700">Image</label><input id="image" type="file" class="input input-bordered"></div><div class="my-4"><label for="mask" class="block text-sm font-medium text-gray-700">Mask</label><input id="mask"${ssrRenderAttr("value", unref(botStore).selectedBot.mask)} type="url" class="input input-bordered"></div><div class="my-4"><label for="prompt" class="block text-sm font-medium text-gray-700">Prompt</label><input id="prompt"${ssrRenderAttr("value", unref(botStore).selectedBot.prompt)} class="input input-bordered"></div><button class="btn btn-primary mt-6">Submit</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/BotCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BotCard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});

export { BotCard as B, _sfc_main as _, useBotStore as u };
//# sourceMappingURL=BotCard-fdfc9d63.mjs.map
