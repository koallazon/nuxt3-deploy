import { useStates } from '@/composables/states'
import { useSetupStore } from '@/stores/setup'
import { useOptionStore } from '@/stores/option'

interface UserInfo {
  name: string
  department: string
}

export const useUpdate = (userInfo: UserInfo) => {
  // Global Reactive
  const { setUserInfo } = useStates()

  // Setup Store
  const setupStore = useSetupStore()

  // Options Store
  const optionStore = useOptionStore()

  const changeUserInfo = (type: string) => {
    switch (type) {
      case 'reactive':
        setUserInfo(userInfo)
        break
      case 'setup':
        setupStore.setUserInfoFromSetup(userInfo)
        break
      case 'option':
        optionStore.setUserInfoFromOption(userInfo)
        break
    }
  }

  return {
    changeUserInfo,
  }
}
