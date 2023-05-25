import { defineStore } from 'pinia';

// Define a type for the state
interface State {
  background: string,
  screenfx: string,
  user: string,
  karma: number,
  robotFriend: string,
  aiPersonality: string,
  useSound: boolean,
  messages: string[],
  activeNav: string,
  selectedNavItem: string | null,
  isNavOpen: boolean,
  isRightOpen: boolean,
  isLeftOpen: boolean,
  useCookies: boolean,
}

export const useSettingsStore = defineStore('settings', {
  // Define state with its type
  state: (): State => ({
    background: 'backtree.webp',
    screenfx: 'LavaLamp',
    user: 'acroguest',
    karma: 0,
    robotFriend: "ami",
    aiPersonality: 'hivemind',
    useSound: true,
    messages: [],
    activeNav: 'amiNav',
    selectedNavItem: null,
    isNavOpen: true,
    isRightOpen: true,
    isLeftOpen: true,
    useCookies: false,
  }),
  actions: {
    setBackground(bg: string) {
      if (typeof bg === 'string' && bg.length > 0) {
        this.background = bg;
      } else {
        throw new Error('Invalid background');
      }
    },
    setScreenFX(fx: string) {
      this.screenfx = fx;
    },
    setUser(user: string) {
      if (typeof user === 'string' && user.length > 0) {
        this.user = user;
      } else {
        throw new Error('Invalid user');
      }
    },
    increaseKarma(amount: number) {
      if (Number.isInteger(amount) && amount > 0) {
        this.karma += amount;
      } else {
        throw new Error('Invalid amount for clicks');
      }
    },
    addMessage(message: string) {
      this.messages.push(message);
    },
    selectNavItem(item: string) {
      this.selectedNavItem = item;
    },
    toggleNavOpen() {
      this.isNavOpen = !this.isNavOpen;
    },
}});
