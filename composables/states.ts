import { reactive, computed } from '#imports'

interface UserInfo {
  name: string
  department: string
}

interface State {
  userInfo: UserInfo | null
}

export const state = reactive<State>({
  userInfo: null,
})

export const useStates = () => {
  const userInfo = computed(() => {
    return state.userInfo
  })
  const isLoggedIn = computed(() => !!state.userInfo)

  function setUserInfo(data: UserInfo) {
    state.userInfo = data
  }

  return {
    userInfo,
    isLoggedIn,
    setUserInfo,
  }
}
