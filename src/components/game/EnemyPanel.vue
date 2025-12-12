<template>
  <div class="enemy-panel p-4 bg-slate-50 rounded-lg shadow">
    <div class="flex items-center gap-3">
      <div class="avatar w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
        E
      </div>
      <div>
        <div class="text-sm text-gray-500">Enemy</div>
        <div class="text-lg font-semibold">{{ enemyName }}</div>
      </div>
      <div class="ml-auto flex items-center gap-1">
        <template v-for="n in maxHearts" :key="n">
          <svg v-if="n <= hearts" class="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.33-4.88-9.33-7.08C.8 11.9 2 7.5 6 6.2 8.2 5.4 10 6.2 12 8.1c2-1.9 3.8-2.7 6-1.9 4 1.3 5.2 5.7 3.33 7.72C19.33 16.12 12 21 12 21z"/></svg>
          <svg v-else class="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.33-4.88-9.33-7.08C.8 11.9 2 7.5 6 6.2 8.2 5.4 10 6.2 12 8.1c2-1.9 3.8-2.7 6-1.9 4 1.3 5.2 5.7 3.33 7.72C19.33 16.12 12 21 12 21z"/></svg>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hearts: { type: Number, default: 3 },
  enemyName: { type: String, default: 'Enemy' },
  maxHearts: { type: Number, default: 5 }
})
</script>

<style scoped>
.enemy-panel { min-width: 220px; }
</style>
