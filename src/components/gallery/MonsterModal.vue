<template>
  <div v-if="monster" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="overlay absolute inset-0 bg-black/50" @click="$emit('close')"></div>
    <div class="modal bg-white rounded-lg p-6 z-10 max-w-3xl w-full">
      <div class="flex gap-4">
        <img :src="monster.image" :alt="monster.name" class="w-40 h-40 object-cover rounded" />
        <div class="flex-1">
          <h2 class="text-2xl font-bold">{{ monster.name }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ monster.description }}</p>
          <div class="text-sm text-gray-500">Type: {{ monster.type }}</div>
          <!-- slot for extra actions -->
          <div class="mt-4"><slot name="actions"></slot></div>
        </div>
        <button class="ml-4 self-start" @click="$emit('close')">✕</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ monster: Object })
defineEmits(['close'])
</script>

<style scoped>
.overlay { backdrop-filter: blur(2px); }
</style>
