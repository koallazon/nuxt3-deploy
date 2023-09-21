<script setup lang="ts">
import { useStates } from '@/composables/states'
const { userInfo, isLoggedIn } = useStates()
</script>

<template>
  <div>
    <h2 class="text-4xl mb-8">Pollution Page</h2>
    <ul class="py-5 text-xl">
      <li>로그인 여부: {{ isLoggedIn }}</li>
      <li v-if="isLoggedIn">사용자 이름: {{ userInfo }}</li>
    </ul>
  </div>
</template>
