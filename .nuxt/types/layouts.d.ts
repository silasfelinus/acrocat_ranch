import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "gamescreen" | "resume" | "welcome"
declare module "/home/silasfelinus/code/kindrobots/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}