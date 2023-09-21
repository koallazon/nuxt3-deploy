<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStates } from '@/composables/states'
import { useSetupStore } from '~/stores/setup'
import { useOptionStore } from '~/stores/option'

// Global Reactive
const { userInfo, isLoggedIn } = useStates()

// Setup Store
const { isLogged: isLoggedFromSetup, userInfo: userInfoFromSetup } = storeToRefs(useSetupStore())

// Options Store
const { isLogged: isLoggedFromOption, userInfoFromOption } = storeToRefs(useOptionStore())
</script>

<template>
  <div>
    <h2 class="text-4xl mb-8">Index Page</h2>
    <h3 class="font-bold text-2xl">Global reactive</h3>
    <ul class="py-5 text-lg">
      <li>로그인 여부: {{ isLoggedIn }}</li>
      <li v-if="isLoggedIn">
        이름: {{ userInfo?.name }} &nbsp;/&nbsp; 부서: {{ userInfo?.department }}
      </li>
    </ul>
    <h3 class="font-bold text-2xl mt-5">Setup Store</h3>
    <ul class="py-5 text-lg">
      <li>로그인 여부: {{ isLoggedFromSetup }}</li>
      <li v-if="isLoggedFromSetup">
        이름: {{ userInfoFromSetup?.name }} &nbsp;/&nbsp; 부서:
        {{ userInfoFromSetup?.department }}
      </li>
    </ul>
    <h3 class="font-bold text-2xl mt-5">Options Store</h3>
    <ul class="py-5 text-lg">
      <li>로그인 여부: {{ isLoggedFromOption }}</li>
      <li v-if="isLoggedFromOption">
        이름: {{ userInfoFromOption?.name }} &nbsp;/&nbsp; 부서:
        {{ userInfoFromOption?.department }}
      </li>
    </ul>
    <div class="box">
      <h3>Global Reactive 상태 공유</h3>
      <div>
        <Comp />
        <Comp2 />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
  background-color: #ddd;
  border: 1px solid #000;
}
.box > h3 {
  width: 100%;
  font-size: 1.3rem;
  background-color: #eee;
  text-align: center;
  line-height: 3rem;
}
.box > div {
  display: flex;
  border-top: 1px solid #000;
}
.box > div > * {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5rem;
  border-right: 1px solid #000;
  justify-content: center;
}
.box > div > *:last-child {
  border-right: 0;
}
</style>
