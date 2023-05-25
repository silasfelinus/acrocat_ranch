import { defineStore } from 'pinia'

interface DisplaySettingsState {
  background: string
  screenfx: string
  activeNav: string
  selectedNavItem: string | null
  isNavOpen: boolean
  isRightOpen: boolean
  isLeftOpen: boolean
}

export const useDisplaySettingsStore = defineStore('displaySettings', {
  state: (): DisplaySettingsState => ({
    background: 'backtree.webp',
    screenfx: 'LavaLamp',
    activeNav: 'amiNav',
    selectedNavItem: null,
    isNavOpen: true,
    isRightOpen: true,
    isLeftOpen: true
  }),
  actions: {
    setBackground(bg: string) {
      if (typeof bg === 'string' && bg.length > 0) {
        this.background = bg
      } else {
        throw new Error('Invalid background')
      }
    },
    setScreenFX(fx: string) {
      this.screenfx = fx
    },
    selectNavItem(item: string) {
      this.selectedNavItem = item
    },
    toggleNavOpen() {
      this.isNavOpen = !this.isNavOpen
    },
    toggleRightOpen() {
      this.isRightOpen = !this.isRightOpen
    },
    toggleLeftOpen() {
      this.isLeftOpen = !this.isLeftOpen
    }
  }
})
