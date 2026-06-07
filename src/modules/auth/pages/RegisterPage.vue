<template>
  <h1 class="text-2xl font-semibold mb-4">Register</h1>
  <form @submit.prevent="onRegister">
    <!-- Full Name Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Full Name</label>
      <input
        v-model="fullName"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
        required
      />
    </div>

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
    <!-- Register Button -->
    <button
      type="submit"
      :disabled="isLoading"
      class="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      {{ isLoading ? 'Registrando...' : 'Register' }}
    </button>
  </form>
  <!-- Login Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Login Here</RouterLink>
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

const fullName = ref('')
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const onRegister = async () => {
  if (!fullName.value || !email.value || !password.value) {
    toast.error('Por favor completa todos los campos')
    return
  }

  if (password.value.length < 6) {
    toast.error('La contraseña debe tener al menos 6 caracteres')
    return
  }

  isLoading.value = true
  try {
    const result = await authStore.register(fullName.value, email.value, password.value)

    if (result.ok) {
      toast.success('¡Registro exitoso! Bienvenido.')
      const lastPath = localStorage.getItem('lastPath') ?? '/'
      router.replace(lastPath)
    } else {
      toast.error(result.message || 'Error al registrarse. Intenta de nuevo.')
    }
  } catch (error) {
    toast.error('Error al registrarse. Intenta de nuevo.')
  } finally {
    isLoading.value = false
  }
}
</script>
