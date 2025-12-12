<template>
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
    <div v-if="icon" class="mb-3">
      <img :src="icon" alt="" class="h-10 w-10 object-contain" />
    </div>
    <h3 class="font-semibold mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: { type: String, default: '' },
  description: { type: String, default: '' }
})
</script>
