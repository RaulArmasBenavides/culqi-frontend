<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form @submit.prevent="onLogin">
    <!-- Email Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        v-model="email"
        type="email"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
        required
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
        required
      />
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      :disabled="isLoading"
      class="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      {{ isLoading ? 'Iniciando sesión...' : 'Login' }}
    </button>
  </form>
  <!-- Sign up Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '../stores/auth.store'

const router = useRouter()
const toast = useToast()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const onLogin = async () => {
  if (!email.value || !password.value) {
    toast.error('Por favor completa todos los campos')
    return
  }

  isLoading.value = true
  try {
    const success = await authStore.login(email.value, password.value)

    if (success) {
      toast.success('¡Sesión iniciada correctamente!')
      const lastPath = localStorage.getItem('lastPath') ?? '/'
      router.replace(lastPath)
    } else {
      toast.error('Usuario o contraseña incorrectos')
    }
  } catch (error) {
    toast.error('Error al iniciar sesión. Intenta de nuevo.')
  } finally {
    isLoading.value = false
  }
}
</script>
