<template>
  <nav class="flex items-center gap-2" aria-label="Pagination">
    <button :disabled="current === 1" @click="go(current - 1)" class="p-2 rounded-full border disabled:opacity-40">‹</button>

    <template v-for="p in pagesToShow" :key="p.key">
      <button
        v-if="p.type === 'page'"
        @click="go(p.page)"
        :class="['w-10 h-10 rounded-full flex items-center justify-center', p.page === current ? 'bg-indigo-600 text-white' : 'bg-white']"
      >
        {{ p.page }}
      </button>

      <div v-else class="px-2">…</div>
    </template>

    <button :disabled="current === total" @click="go(current + 1)" class="p-2 rounded-full border disabled:opacity-40">›</button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: { type: Number, default: 1 },
  total: { type: Number, required: true },
  maxVisible: { type: Number, default: 5 } // how many numeric pages around current
})
const emit = defineEmits(['change'])

function go(p) {
  if (p < 1 || p > props.total || p === props.current) return
  emit('change', p)
}

// build pages with ellipsis
const pagesToShow = computed(() => {
  const total = props.total
  const cur = props.current
  const window = props.maxVisible // e.g. 5

  // always include 1 and total
  if (total <= window + 2) {
    return Array.from({ length: total }, (_, i) => ({ type: 'page', page: i+1, key: `p${i+1}` }))
  }

  const pages = []
  const left = Math.max(2, cur - Math.floor(window/2))
  const right = Math.min(total - 1, cur + Math.floor(window/2))

  // front
  pages.push({ type: 'page', page: 1, key: 'p1' })

  if (left > 2) pages.push({ type: 'dots', key: 'd1' })

  for (let p = left; p <= right; p++) {
    pages.push({ type: 'page', page: p, key: `p${p}` })
  }

  if (right < total - 1) pages.push({ type: 'dots', key: 'd2' })

  pages.push({ type: 'page', page: total, key: `p${total}` })

  return pages
})
</script>

<style scoped>
button { outline: none; }
</style>
