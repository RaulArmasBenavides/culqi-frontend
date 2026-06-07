<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/modules/auth/stores/auth.store'

const authStore = useAuthStore()

onMounted(async () => {
  await authStore.checkAuthStatus()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.culqi-logo {
  width: 25%;
}
</style>
