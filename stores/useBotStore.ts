import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', () => {
  const activeBot = ref('amibot')
  const getBot = computed(() => activeBot.value)
  function changeBot(name: String) {
    // put in function
  }

  return { changeBot, getBot, activeBot }
})
