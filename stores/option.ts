import { defineStore } from '#imports'

interface UserInfo {
  name: string
  department: string
}

interface State {
  userInfo: UserInfo | null
}

export const useOptionStore = defineStore('OptionStore', {
  state: (): State => ({
    userInfo: null,
  }),
  getters: {
    userInfoFromOption: (state) => state.userInfo,
    isLogged: (state) => !!state.userInfo,
  },
  actions: {
    setUserInfoFromOption(data: UserInfo) {
      this.userInfo = data
    },
  },
})
