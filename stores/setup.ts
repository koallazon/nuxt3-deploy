import { reactive, computed, defineStore } from '#imports'

interface UserInfo {
  name: string
  department: string
}

interface State {
  userInfo: UserInfo | null
}

export const useSetupStore = defineStore('SetupStore', () => {
  // state
  const state = reactive<State>({
    userInfo: null,
  })

  // getters
  const userInfo = computed(() => state.userInfo)
  const isLogged = computed(() => !!state.userInfo)

  // actions
  const setUserInfoFromSetup = (data: UserInfo) => {
    state.userInfo = data
  }

  return {
    userInfo,
    isLogged,
    setUserInfoFromSetup,
  }
})
