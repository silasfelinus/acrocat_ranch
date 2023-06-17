import { defineStore } from 'pinia'
import { Bot } from '../types/bot'
import { localBots } from '../botMap'

export const useBotStore = defineStore('bots', () => {
  const bots = ref<Bot[]>([])
  const selectedBot = ref<Bot>({} as Bot)

  const loadBots = async () => {
    try {
      const response = await fetch('/api/bots') // Fetch bots from API
      if (!response.ok) throw new Error('Failed to load bots from API')
      const databaseBots = await response.json()
      bots.value = [...localBots, ...databaseBots] // Merge local bots and database bots
    } catch (error) {
      console.error('Failed to load bots:', error)
    }
  }

  const updateBots = async () => {
    try {
      const response = await fetch('/api/bots') // Fetch bots from API
      if (!response.ok) throw new Error('Failed to update bots from API')
      const databaseBots = await response.json()
      bots.value = databaseBots // Update local bots with database bots
    } catch (error) {
      console.error('Failed to update bots:', error)
    }
  }

  const selectBot = (botId: number) => {
    const bot = bots.value.find((bot) => bot.id === botId)
    if (bot) {
      selectedBot.value = bot
    }
  }

  const initializeDatabase = async () => {
    try {
      const response = await fetch('/api/bots/count') // Get bot count from API
      if (!response.ok) throw new Error('Failed to fetch bot count from API')
      const { count } = await response.json()
      if (count === 0) {
        // If the database is empty
        for (const bot of localBots) {
          // For each local bot
          const response = await fetch('/api/bots', {
            // Create bot through API
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bot)
          })
          if (!response.ok) throw new Error('Failed to create bot in database')
        }
      }
    } catch (error) {
      console.error('Failed to initialize the database:', error)
    }
  }

  // Initialize the database when the store is created
  initializeDatabase()

  // Load the bots when the store is created
  loadBots()

  return {
    get bots() {
      return bots.value
    },
    get selectedBot() {
      return selectedBot.value
    },
    selectBot,
    updateBots // Expose the updateBots function
  }
})
