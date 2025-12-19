<template>
  <div class="game-area space-y-6 px-4">
    <!-- Row utama: responsive -->
    <div class="flex flex-col md:flex-row md:items-start gap-4">
      <!-- Left group: Player + (mobile) Enemy -->
      <div class="flex items-start gap-4 w-full md:w-auto">
        <!-- Player (mobile: 50% width, desktop auto) -->
        <div class="w-1/2 md:w-auto min-w-0">
          <PlayerPanel :hearts="playerHearts" :maxHearts="maxHearts" />
        </div>

        <!-- Enemy (mobile only) -->
        <div class="w-1/2 md:hidden min-w-0">
          <EnemyPanel
            :hearts="enemyHearts"
            :maxHearts="maxHearts"
            :enemyName="enemy.name"
            :isBoss="enemy.isBoss"
          />
        </div>
      </div>

      <!-- Question center (full width on mobile, flex-1 on desktop) -->
      <div class="w-full md:flex-1 min-w-0">
        <QuestionBox
          :question="currentQuestion"
          :disabled="isAnswerLocked"
          @answer="selectAnswer"
        />
      </div>

      <!-- Enemy (desktop only, fixed width) -->
      <div class="hidden md:block w-64 min-w-0">
        <EnemyPanel
          :hearts="enemyHearts"
          :maxHearts="maxHearts"
          :enemyName="enemy.name"
          :isBoss="enemy.isBoss"
        />
      </div>
    </div>

    <!-- Controls -->
    <div class="controls flex gap-2">
      <button @click="startGame" class="px-3 py-1 border rounded">Restart</button>
      <div class="ml-auto text-sm text-gray-500">
        Question {{ currentIndex + 1 }} / {{ questions.length }}
      </div>
    </div>

    <GameResultModal v-if="showModal" :status="resultStatus" @close="resetGame" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PlayerPanel from './PlayerPanel.vue'
import EnemyPanel from './EnemyPanel.vue'
import QuestionBox from './QuestionBox.vue'
import GameResultModal from './GameResult.vue'

/* QUESTIONS (contoh) */
const questions = [
  { text: '2 + 2 = ?', options: ['3','4','5','6'], correctIndex: 1 },
  { text: 'Ibu kota Indonesia?', options: ['Jakarta','Bandung','Surabaya','Medan'], correctIndex: 0 },
  { text: 'Benua terbesar?', options: ['Afrika','Asia','Eropa','Antartika'], correctIndex: 1 },
  { text: 'Planet terdekat ke Matahari?', options: ['Venus','Bumi','Merkurius','Mars'], correctIndex: 2 },
  { text: 'Bahasa pemrograman mana yang lebih tua?', options: ['Python','C','JavaScript','Java'], correctIndex: 1 }
]

/* MONSTERS harus dideklarasikan sebelum computed `enemy` */
const monsters = [
  { id: 1, name: 'Slime', hearts: 3, isBoss: false },
  { id: 2, name: 'Goblin', hearts: 3, isBoss: false },
  { id: 3, name: 'Orc', hearts: 4, isBoss: false },
  { id: 4, name: 'Giant', hearts: 5, isBoss: false },
  { id: 5, name: 'Hydra', hearts: 5, isBoss: false },
  { id: 6, name: 'Phantom', hearts: 5, isBoss: false },
  { id: 7, name: 'Warlord', hearts: 6, isBoss: false },
  { id: 8, name: 'Dragon', hearts: 6, isBoss: true }
]

const maxHearts = 6

const playerHearts = ref(3)
const currentIndex = ref(0)
const showModal = ref(false)
const resultStatus = ref('')
const isAnswerLocked = ref(false)
const level = ref(1)
const currentMonsterIndex = ref(0)

/* computed enemy - gunakan monsters & index */
const enemy = computed(() => monsters[currentMonsterIndex.value])
/* mulai dengan hp sesuai enemy */
const enemyHearts = ref(enemy.value.hearts)

/* question computed */
const currentQuestion = computed(() => questions[currentIndex.value])

function startGame() {
  playerHearts.value = 3
  enemyHearts.value = enemy.value.hearts
  currentIndex.value = 0
  currentMonsterIndex.value = 0
  showModal.value = false
  resultStatus.value = ''
  level.value = 1
  isAnswerLocked.value = false
}

function resetGame() { startGame() }

function loadNextMonster() {
  enemyHearts.value = enemy.value.hearts
  currentIndex.value = 0
  isAnswerLocked.value = false
}

function handleEnemyDefeated() {
  // contoh: panggil helper unlockMonster (jika Anda punya util)
  // unlockMonster(enemy.value.id)

  if (enemy.value.isBoss) {
    resultStatus.value = 'win'
    showModal.value = true
    return
  }

  level.value++
  currentMonsterIndex.value++
  if (currentMonsterIndex.value >= monsters.length) {
    // opsi: loop atau stop
    currentMonsterIndex.value = monsters.length - 1
  }
  loadNextMonster()
}

function selectAnswer(selectedIndex) {
  if (showModal.value || isAnswerLocked.value) return

  isAnswerLocked.value = true
  const correct = selectedIndex === currentQuestion.value.correctIndex

  if (correct) {
    enemyHearts.value = Math.max(0, enemyHearts.value - 1)
    if (enemyHearts.value <= 0) {
      handleEnemyDefeated()
      // early return: jangan langsung increment soal jika monster defeated
      isAnswerLocked.value = false
      return
    }
    // lanjut ke soal berikutnya
    currentIndex.value++
  } else {
    playerHearts.value = Math.max(0, playerHearts.value - 1)
    if (playerHearts.value <= 0) {
      resultStatus.value = 'lose'
      showModal.value = true
      isAnswerLocked.value = false
      return
    }
  }

  // reset lock singkat untuk UX (biar gak spam)
  setTimeout(() => { isAnswerLocked.value = false }, 250)

  // reset soal index jika sampai akhir soal
  if (currentIndex.value >= questions.length) currentIndex.value = 0
}
</script>

<style scoped>
.game-area { padding-top: 8px; }
</style>
