<script setup lang="ts">
import { useStates } from '../composables/states'
import { useUpdate } from '@/composables/update'

// Global Reactive
const { userInfo, isLoggedIn } = useStates()

const data = {
  name: '홍길동',
  department: '총무팀🐶',
}

const { changeUserInfo } = useUpdate(data)
</script>

<template>
  <section>
    <h2 class="text-lg font-bold">Component-1</h2>
    <div v-if="isLoggedIn">
      이름: {{ userInfo?.name }}<br />
      부서: {{ userInfo?.department }}
    </div>
    <button type="button" @click="changeUserInfo('reactive')">사용자 변경</button>
    <b class="text-sm text-slate-500">&lt;Global Reactive 상태 변경&gt;</b>
  </section>
</template>

<style scoped></style>
