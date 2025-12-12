<template>
  <div class="bg-white rounded-xl p-6 flex items-center gap-6 shadow">
    <div class="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold">
      {{ initial }}
    </div>
    <div>
      <h3 class="text-xl font-bold">{{ user?.username || 'Guest' }}</h3>
      <p class="text-sm text-gray-600">{{ bio }}</p>
    </div>
    <div class="ml-auto">
      <button @click="$emit('edit')" class="px-3 py-1 border rounded">Edit Profile</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuth } from '../../stores/useAuth'

const { user } = useAuth()
const initial = computed(() => user.value?.username?.charAt(0).toUpperCase() || '?')
const bio = computed(() => user.value?.bio || 'Petualang pengetahuan di EdVenture Arena.')
</script>
