import { useStates } from '@/composables/states'
import { useSetupStore } from '@/stores/setup'
import { useOptionStore } from '@/stores/option'
import { decodeUnicode } from '@/utils/base64'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  const { token } = to.query

  const { setUserInfo } = useStates()

  // Setup Store
  const setupStore = useSetupStore()

  // Options Store
  const optionStore = useOptionStore()

  if (token) {
    try {
      const jsonToken = decodeUnicode(token as string)
      const parsedToken = JSON.parse(jsonToken)
      setUserInfo(parsedToken)
      setupStore.setUserInfoFromSetup(parsedToken)
      optionStore.setUserInfoFromOption(parsedToken)
    } catch (err) {
      console.error('token parse 에러 발생')
    }
  }
})
