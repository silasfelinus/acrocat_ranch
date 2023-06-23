import { defineStore } from 'pinia'
import { Bot } from '../types/bot'
import { localBots } from '../botMap'

const API_BASE_URL = process.env.APP_URL || 'http://localhost:3000'

export const useBotStore = defineStore('bots', {
  state: () => ({
    bots: [] as Bot[],
    selectedBot: {
      name: 'AMIb0t',
      botType: 'chatbot',
      description:
        'Raising awareness to purchase mosquito nets for children in africa',
      avatarImage: '/images/wonderchest/wonderchest304_(23).webp',
      model: 'gpt-3.5-turbo',
      post: 'https://api.openai.com/v1/completions',
      temperature: 1.0,
      maxTokens: 500,
      n: 1,
      prompt:
        'Please respond as AMIB0t, The Anti-Malaria Intelligence, a hyperkinetic Digital Hive-mind created to fight malaria through social outreach and humor'
    } as Bot | null
  }),
  actions: {
    loadLocalBots() {
      this.bots = localBots
    },
    async loadBots() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/bots`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const databaseBots: Bot[] = await response.json()
        // Overwrite the localBots with fetched bots
        this.bots = databaseBots
      } catch (error) {
        console.error('Failed to load bots:', error)
      }
    },
    selectBot(botId: Number) {
      const bot = this.bots.find((bot) => bot.id === botId)
      if (bot) {
        this.selectedBot = bot
      }
    }
  }
})

// Load the localBots when the store is created
const store = useBotStore()
store.loadLocalBots()
// Then load the fetched bots
store.loadBots()
