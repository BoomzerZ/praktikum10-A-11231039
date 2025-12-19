<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="close"></div>

    <div class="bg-white rounded-lg shadow-xl z-10 max-w-xl w-full p-6">
      <div class="flex items-start gap-4">
        <img v-if="monster.image" :src="monster.image" alt="" class="w-24 h-24 rounded-md object-cover" />
        <div>
          <h3 class="text-2xl font-bold">{{ monster.name }}</h3>
          <div class="text-sm text-slate-500 mt-1">Killed: {{ killCount }}</div>
          <div v-if="monster.isBoss" class="mt-2 inline-block px-2 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded">BOSS</div>
        </div>
      </div>

      <div class="mt-4 text-slate-700" v-html="monster.bio || defaultBio()"></div>

      <div class="mt-4 flex justify-end gap-2">
        <button class="px-3 py-1 rounded border" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getKillCount } from '../../utils/galleryHelper.js'

const props = defineProps({
  monster: { type: Object, required: true }
})
const emit = defineEmits(['close'])

const killCount = computed(() => getKillCount(props.monster.id))

function close() { emit('close') }

function defaultBio() {
  return `<p>No biography available for ${props.monster.name}.</p>`
}
</script>

<style scoped>
/* small niceties */
</style>
