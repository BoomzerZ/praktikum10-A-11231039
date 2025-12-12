<template>
  <section class="gallery-page p-6">
    <header class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Gallery</h1>
      <div class="controls flex items-center gap-3">
        <input v-model="q" placeholder="Search..." class="px-3 py-1 border rounded" />
        <select v-model.number="perPage" class="px-2 py-1 border rounded">
          <option :value="6">6</option>
          <option :value="12">12</option>
          <option :value="24">24</option>
        </select>
      </div>
    </header>

    <!-- grid -->
    <div class="grid gap-4"
         :style="{ gridTemplateColumns: gridColumns }">
      <MonsterCard
        v-for="m in paged"
        :key="m.id"
        :monster="m"
        @select="openMonster"
      />
    </div>

    <div class="mt-6 flex items-center justify-between">
      <div class="text-sm text-gray-500">Showing {{ startIndex + 1 }} - {{ Math.min(endIndex, filtered.length) }} of {{ filtered.length }}</div>
      <Pagination :total="filtered.length" :per-page="perPage" :current="currentPage" @change="onPageChange" />
    </div>

    <MonsterModal :monster="selectedMonster" @close="closeMonster">
      <template #actions>
        <button class="px-3 py-1 rounded bg-blue-600 text-white" @click="favorite(selectedMonster)">Favorite</button>
      </template>
    </MonsterModal>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import MonsterCard from '../components/gallery/MonsterCard.vue'
import MonsterModal from '../components/gallery/MonsterModal.vue'
import Pagination from '../components/gallery/Pagination.vue'

// sample data — ganti dengan fetch / store sesuai arsitektur
const monsters = ref([
  { id:1, name:'Drake', image:'/images/drake.jpg', short:'Fire dragon', description:'Large fire dragon', type:'Fire' },
  /* ... lebih banyak objek ... */
])

const q = ref('')
const currentPage = ref(1)
const perPage = ref(12)

const filtered = computed(() => {
  if (!q.value) return monsters.value
  return monsters.value.filter(m => m.name.toLowerCase().includes(q.value.toLowerCase()))
})

const total = computed(() => filtered.value.length)
const totalPages = computed(() => Math.max(1, Math.ceil(total.value / perPage.value)))

const startIndex = computed(() => (currentPage.value - 1) * perPage.value)
const endIndex = computed(() => startIndex.value + perPage.value)
const paged = computed(() => filtered.value.slice(startIndex.value, endIndex.value))

const gridColumns = computed(() => {
  // responsive: smaller screens fewer columns; use CSS or Tailwind in production
  // simple formula: fixed col count
  return perPage.value >= 12 ? 'repeat(4, minmax(0,1fr))' : 'repeat(3, minmax(0,1fr))'
})

const selectedMonster = ref(null)

function openMonster(monster) {
  selectedMonster.value = monster
}

function closeMonster() {
  selectedMonster.value = null
}

function onPageChange(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// optional action
function favorite(monster) {
  console.log('favorite', monster)
}
</script>

<style scoped>
.gallery-page .grid { margin-bottom: 12px; }
/* Use media queries or utility classes for responsive columns in real project */
@media (max-width: 768px) {
  .gallery-page .grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
</style>
