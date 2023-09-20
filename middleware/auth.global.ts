import { useStates } from '../composables/states'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) return

  const { setUserInfo } = useStates()

  const { token } = to.query

  console.log(
    '🚀 ~ file: auth.global.ts:3 ~ defineNuxtRouteMiddleware ~ token:',
    token,
    process.server ? '서버' : '클라이언트'
  )
  if (token) {
    setUserInfo(token)
  }
})
