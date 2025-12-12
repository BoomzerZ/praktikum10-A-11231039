<template>
  <nav class="pagination flex items-center gap-2">
    <button :disabled="current === 1" @click="$emit('change', current - 1)">Prev</button>
    <template v-for="p in pagesToShow" :key="p">
      <button
        :class="['px-2 py-1 rounded', p === current ? 'bg-blue-600 text-white' : '']"
        @click="$emit('change', p)"
      >{{ p }}</button>
    </template>
    <button :disabled="current === totalPages" @click="$emit('change', current + 1)">Next</button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  total: { type: Number, required: true },
  perPage: { type: Number, required: true },
  current: { type: Number, default: 1 }
})
const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.perPage)))

// simple pages array; you can improve to windowed pages
const pagesToShow = computed(() => {
  const pages = []
  for (let i = 1; i <= totalPages.value; i++) pages.push(i)
  return pages
})
</script>
