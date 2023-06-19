// /stores/bots.ts
import { defineStore } from 'pinia'
import { Bot } from '../types/bot'
import { localBots } from '../botMap'

const API_BASE_URL = process.env.APP_URL || 'http://localhost:3000'

export const useBotStore = defineStore('bots', {
  state: () => ({
    bots: [] as Bot[],
    selectedBot: null as Bot | null
  }),
  actions: {
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
        this.bots = [...localBots, ...databaseBots]
      } catch (error) {
        console.error('Failed to load bots:', error)
      }
    },
    async updateBots() {
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
        this.bots = databaseBots
      } catch (error) {
        console.error('Failed to update bots:', error)
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

// Load the bots when the store is created
const store = useBotStore()
store.loadBots()
