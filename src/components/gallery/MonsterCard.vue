<template>
  <div
    class="monster-card relative bg-white rounded-xl shadow p-6 cursor-pointer overflow-hidden"
    :class="locked ? 'opacity-60 grayscale' : 'hover:shadow-lg'"
    @click="onClick"
    role="button"
    :aria-disabled="locked ? 'true' : 'false'"
  >
    <div class="flex flex-col items-center gap-4">
      <!-- image or placeholder -->
      <div class="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
        <img v-if="!locked && monster.image" :src="monster.image" :alt="monster.name" class="object-cover w-full h-full" />
        <div v-else class="text-slate-400 font-semibold">{{ locked ? 'Locked' : 'No Image' }}</div>
      </div>

      <div class="text-lg font-semibold text-center">{{ monster.name }}</div>

      <div class="text-sm text-slate-600 text-center">
        <span v-if="locked">Unlock by defeating it in game</span>
        <span v-else>Health: {{ monster.hearts }}</span>
      </div>

      <!-- kill count small -->
      <div v-if="!locked" class="mt-2 text-xs text-slate-500">Killed: {{ killCount }}</div>
    </div>

    <div v-if="locked" class="absolute inset-0 bg-gradient-to-t from-white/0 to-white/60 pointer-events-none"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { isUnlocked, getKillCount } from '../../utils/galleryHelper.js'

const props = defineProps({
  monster: { type: Object, required: true }
})
const emit = defineEmits(['open'])

const locked = computed(() => !isUnlocked(props.monster.id))
const killCount = computed(() => getKillCount(props.monster.id))

function onClick() {
  if (locked.value) {
    // optional: show small toast "locked"
    return
  }
  emit('open', props.monster)
}
</script>

<style scoped>
.monster-card { min-height: 240px; }
</style>
