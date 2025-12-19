<template>
  <div class="player-panel p-4 bg-slate-50 rounded-lg shadow min-w-0 w-full md:w-auto">
    <div class="flex items-center gap-3">
      <div class="avatar flex-none rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg md:text-xl w-12 h-12">
        {{ playerInitial }}
      </div>

      <div class="min-w-0">
        <div class="text-sm text-gray-500">Player</div>
        <div class="text-lg font-semibold truncate">You</div>
      </div>

      <div class="ml-auto flex items-center gap-1 flex-wrap max-w-[160px]">
        <template v-for="n in maxHearts" :key="n">
          <svg v-if="n <= hearts" class="w-4 h-4 md:w-5 md:h-5 text-red-500 flex-none" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7.33-4.88-9.33-7.08C.8 11.9 2 7.5 6 6.2 8.2 5.4 10 6.2 12 8.1c2-1.9 3.8-2.7 6-1.9 4 1.3 5.2 5.7 3.33 7.72C19.33 16.12 12 21 12 21z"/>
          </svg>
          <svg v-else class="w-4 h-4 md:w-5 md:h-5 text-gray-300 flex-none" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7.33-4.88-9.33-7.08C.8 11.9 2 7.5 6 6.2 8.2 5.4 10 6.2 12 8.1c2-1.9 3.8-2.7 6-1.9 4 1.3 5.2 5.7 3.33 7.72C19.33 16.12 12 21 12 21z"/>
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hearts: { type: Number, default: 3 },
  maxHearts: { type: Number, default: 6 }
})

const playerInitial = 'P'
</script>

<style scoped>
.player-panel { /* allow shrink */ }
</style>
