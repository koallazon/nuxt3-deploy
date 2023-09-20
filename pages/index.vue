<script setup lang="ts">
import { useStates, state } from '../composables/states'
console.log('🚀 ~ file: index.vue:3 ~ state:', state)
const { userInfo, isLoggedIn } = useStates()
</script>

<template>
  <div>
    <h2>Index Page</h2>
    <ul>
      <li>사용자 이름: {{ state.userInfo }}</li>
      <li>로그인 여부: {{ isLoggedIn }}</li>
      <li v-if="isLoggedIn">사용자 이름: {{ userInfo }}</li>
    </ul>
    <div class="box">
      <Comp />
      <Comp2 />
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  width: 100%;
}
.box > * {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5rem;
  background-color: #ccc;
  border-right: 1px solid #000;
  justify-content: center;
}
.box > *:last-child {
  border-right: 0;
}
</style>
