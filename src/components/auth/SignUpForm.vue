<template>
  <form @submit.prevent="submit" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
    <h3 class="text-2xl font-bold mb-4">Sign Up</h3>
    <div class="mb-4">
      <label class="block text-sm mb-1">Username</label>
      <input v-model="username" class="w-full border rounded px-3 py-2" />
    </div>
    <div class="mb-4">
      <label class="block text-sm mb-1">Password</label>
      <input type="password" v-model="password" class="w-full border rounded px-3 py-2" />
    </div>
    <div v-if="error" class="text-red-600 mb-2">{{ error }}</div>
    <div class="flex justify-end">
      <button class="px-4 py-2 bg-indigo-600 text-white rounded">Create Account</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../stores/useAuth'

const { signup } = useAuth()
const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

async function submit() {
  error.value = ''
  try {
    await signup(username.value, password.value)
    router.push('/') // redirect to home after signup
  } catch (e) {
    error.value = e.message || 'Gagal register'
  }
}
</script>
