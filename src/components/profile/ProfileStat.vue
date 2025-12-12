<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-white p-4 rounded shadow text-center">
      <div class="text-sm text-gray-500">Level</div>
      <div class="text-xl font-bold">{{ stats.level }}</div>
    </div>
    <div class="bg-white p-4 rounded shadow text-center">
      <div class="text-sm text-gray-500">Wins</div>
      <div class="text-xl font-bold">{{ stats.wins }}</div>
    </div>
    <div class="bg-white p-4 rounded shadow text-center">
      <div class="text-sm text-gray-500">Monsters</div>
      <div class="text-xl font-bold">{{ stats.kills }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ stats: { type: Object, default: () => ({ level:0, wins:0, kills:0 }) } })
</script>
