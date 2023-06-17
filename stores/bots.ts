import { defineStore } from 'pinia'
import botMap from './../botMap'

type Bot = {
  id?: number
  name: string
  botType: string
  description: string
  avatarImage: string
  model: string
  post: string
  temperature: number
  maxTokens: number
  prompt: string
  image?: string
  mask?: string
  style?: string
  n?: number
  size?: string
  intro?: string
}

export const useBotStore = defineStore('bot', () => {
  // state
  const bots = ref(botMap as unknown as Bot[])
  const selectedBot = ref(bots.value.find((bot) => bot.id === 0) as Bot | null)
  const loading = ref(false)
  const error = ref(null as string | null)

  // actions
  const selectBot = (bot: Bot) => {
    selectedBot.value = bot
  }

  return { bots, selectedBot, loading, error, selectBot }
})
