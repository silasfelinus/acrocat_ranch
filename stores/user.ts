import { defineStore } from "pinia";

interface UserSettingsState {
  user: string;
  robotFriend: string;
  aiPersonality: string;
  useSound: boolean;
  useCookies: boolean;
  karma: number;
}

export const useUserSettingsStore = defineStore("userSettings", {
  state: (): UserSettingsState => ({
    user: "acroguest",
    robotFriend: "ami",
    aiPersonality: "hivemind",
    useSound: true,
    useCookies: false,
    karma: 0,
  }),
  actions: {
    setUser(user: string) {
      if (typeof user === "string" && user.length > 0) {
        this.user = user;
      } else {
        throw new Error("Invalid user");
      }
    },
    increaseKarma(amount: number) {
      if (Number.isInteger(amount) && amount > 0) {
        this.karma += amount;
      } else {
        throw new Error("Invalid amount for karma");
      }
    },
  },
});
