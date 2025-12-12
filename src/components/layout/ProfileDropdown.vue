<template>
  <div class="relative">
    <button @click="open = !open" class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
      {{ initial }}
    </button>

    <div
      v-if="open"
      class="absolute right-0 mt-2 w-40 bg-white shadow-lg p-2 rounded-xl"
    >
      <router-link to="/profile" class="block p-2 rounded hover:bg-gray-100">
        Profile
      </router-link>
      <button
        @click="logout"
        class="block w-full text-left p-2 text-red-600 hover:bg-red-100 rounded"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/stores/useAuth.js'

const open = ref(false)

const { user, logout } = useAuth()

const initial = user?.value?.username?.charAt(0)?.toUpperCase() ?? '?'
</script>
