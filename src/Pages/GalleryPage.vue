<template>
  <section class="p-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Unlockable</h2>
    <div class="mb-6 text-sm text-slate-500">Progress: {{ unlockedCount }} / {{ monsters.length }} unlocked</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <MonsterCard
        v-for="m in pageItems"
        :key="m.id"
        :monster="m"
        @open="openMonster"
      />
    </div>

    <div class="mt-8 flex items-center justify-center">
      <Pagination :current="currentPage" :total="totalPages" :maxVisible="5" @change="goPage" />
    </div>

    <MonsterModal v-if="open" :monster="selected" @close="open = false" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import MonsterCard from '../components/gallery/MonsterCard.vue'
import MonsterModal from '../components/gallery/MonsterModal.vue'
import Pagination from '../components/gallery/Pagination.vue'
import { getUnlocked } from '../utils/galleryHelper.js'

// static monster list (example) - you can move this to separate JSON
const monsters = [
  // provide ids 1..N, images optional
  { 
  id: 1, 
  name: 'Slime', 
  hearts: 3, 
  bio: 'Makhluk paling dasar di dunia EdVenture. Slime tercipta dari residu energi sihir yang terkumpul terlalu lama di satu tempat. Meski terlihat lemah dan lamban, Slime sering menjadi ujian pertama bagi para petualang pemula untuk mengasah insting dan ketelitian mereka. Jangan meremehkannya! kesalahan kecil bisa tetap berakibat fatal.',
  image: '/src/assets/monsters/Slime.png', 
  isBoss: false 
  },

  { 
  id: 2, 
  name: 'Goblin', 
  hearts: 3, 
  bio: 'Goblin adalah makhluk licik yang hidup berkelompok di hutan dan gua gelap. Mereka tidak kuat secara fisik, tetapi unggul dalam tipu daya dan serangan mendadak. Banyak petualang tumbang bukan karena kekuatan Goblin, melainkan karena meremehkan kecerdasannya.', 
  image: '/src/assets/monsters/Goblin.png', 
  isBoss: false 
  },

  { 
  id: 3, 
  name: 'Orc', 
  hearts: 4, 
  bio: 'Orc dikenal sebagai prajurit brutal dengan kekuatan dan daya tahan tinggi. Mereka hidup untuk pertempuran dan menghormati kekuatan di atas segalanya. Menghadapi Orc bukan hanya soal pengetahuan, tetapi juga konsistensi.. satu kesalahan bisa membuat pertarungan berakhir lebih cepat dari yang diduga.', 
  image: '/src/assets/monsters/Orc.png', 
  isBoss: false 
  },
  // ... up to whatever
  { 
  id: 10, 
  name: 'Dragon', 
  hearts: 6, 
  bio: 'Makhluk legendaris yang telah hidup selama ribuan tahun. Ancient Dragon bukan sekadar monster, melainkan simbol puncak tantangan di dunia EdVenture. Ia menguasai pengetahuan kuno, kekuatan penghancur, dan kecerdasan luar biasa. Hanya petualang terbaik yang mampu mengalahkannya dan membuktikan diri layak menjadi legenda.', 
  image: '/src/assets/monsters/Ancient_dragon.png', 
  isBoss: true 
  },
  // add more to reach many pages...
]

const perPage = 15
const currentPage = ref(1)
const open = ref(false)
const selected = ref(null)

const totalPages = computed(() => Math.max(1, Math.ceil(monsters.length / perPage)))
const unlockedIds = computed(() => getUnlocked())
const unlockedCount = computed(() => unlockedIds.value.length)

const pageItems = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return monsters.slice(start, start + perPage)
})

function goPage(n) {
  currentPage.value = n
}

function openMonster(monster) {
  selected.value = monster
  open.value = true
}
</script>

<style scoped>
/* small layout tweaks if needed */
</style>
