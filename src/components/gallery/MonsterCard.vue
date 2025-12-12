<template>
  <article class="monster-card p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
           @click="$emit('select', monster)">
    <div class="thumb mb-3">
      <img :src="monster.image" :alt="monster.name" class="w-full h-44 object-cover rounded" />
    </div>
    <h3 class="text-lg font-semibold">{{ monster.name }}</h3>
    <p class="text-sm text-gray-500">{{ monster.short }}</p>
  </article>
</template>

<script setup>
defineProps({
  monster: { type: Object, required: true }
})
</script>

<style scoped>
/* minimal style — gunakan tailwind atau CSS proyekmu */
.monster-card { height: 100%; display:flex; flex-direction:column; justify-content:space-between; }
</style>
