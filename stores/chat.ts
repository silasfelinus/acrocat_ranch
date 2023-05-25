import { defineStore } from "pinia";

interface ChatSettingsState {
  messages: string[];
}

export const useChatSettingsStore = defineStore("chatSettings", {
  state: (): ChatSettingsState => ({
    messages: [],
  }),
  actions: {
    addMessage(message: string) {
      this.messages.push(message);
    },
  },
});
