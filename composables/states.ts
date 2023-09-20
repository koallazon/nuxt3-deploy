import { reactive, computed } from '#imports'

interface UserInfo {
  name: string
}
interface State {
  userInfo: UserInfo | null
  path: string
}

export const state = reactive<State>({
  userInfo: null,
  path: '',
})

export const useStates = () => {
  const userInfo = computed(() => state.userInfo)
  const isLoggedIn = computed(() => !!state.userInfo)

  const path = computed(() => state.path)
  const isPath = computed(() => !!state.path)

  function setUserInfo(data: UserInfo) {
    state.userInfo = data
  }

  function setPath(data: string) {
    state.path = data
  }

  return {
    userInfo,
    isLoggedIn,
    path,
    isPath,
    setUserInfo,
    setPath,
  }
}
