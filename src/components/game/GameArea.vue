<template>
  <div class="game-area space-y-6">
    <div class="flex gap-4">
      <PlayerPanel :hearts="playerHearts" />
      <div class="flex-1">
        <QuestionBox
          :question="currentQuestion"
          @answer="handleAnswer"
        />
      </div>
      <EnemyPanel :hearts="enemyHearts" :enemyName="enemyName" />
    </div>

    <div class="controls flex gap-2">
      <button @click="startGame" class="px-3 py-1 border rounded">Restart</button>
      <div class="ml-auto text-sm text-gray-500">Question {{ currentIndex + 1 }} / {{ questions.length }}</div>
    </div>

    <GameResultModal v-if="showModal" :status="resultStatus" @close="resetGame" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PlayerPanel from '../game/PlayerPanel.vue'
import EnemyPanel from '../game/EnemyPanel.vue'
import QuestionBox from '../game/QuestionBox.vue'
import GameResultModal from '../game/GameResult.vue'

const questions = [
  { text: '2 + 2 = ?', options: ['3','4','5','6'], correctIndex: 1 },
  { text: 'Ibu kota Indonesia?', options: ['Jakarta','Bandung','Surabaya','Medan'], correctIndex: 0 },
  { text: 'Benua terbesar?', options: ['Afrika','Asia','Eropa','Antartika'], correctIndex: 1 },
]

const enemyName = 'Bot A'
const maxHearts = 3

const playerHearts = ref(maxHearts)
const enemyHearts = ref(maxHearts)
const currentIndex = ref(0)
const showModal = ref(false)
const resultStatus = ref('')

const currentQuestion = computed(() => questions[currentIndex.value])

function startGame() {
  playerHearts.value = maxHearts
  enemyHearts.value = maxHearts
  currentIndex.value = 0
  showModal.value = false
  resultStatus.value = ''
}

function resetGame() {
  startGame()
}

function checkEnd() {
  if (playerHearts.value <= 0) {
    resultStatus.value = 'lose'; showModal.value = true; return true
  }
  if (enemyHearts.value <= 0) {
    resultStatus.value = 'win'; showModal.value = true; return true
  }
  if (currentIndex.value >= questions.length) {
    resultStatus.value = (playerHearts.value > enemyHearts.value) ? 'win' : (playerHearts.value < enemyHearts.value ? 'lose' : 'draw')
    showModal.value = true
    return true
  }
  return false
}

function handleAnswer(index) {
  // contoh mekanisme: benar -> damage enemy, salah -> damage player
  if (index === currentQuestion.value.correctIndex) {
    enemyHearts.value -= 1
  } else {
    playerHearts.value -= 1
  }

  // maju ke soal berikutnya (atau end)
  currentIndex.value += 1

  // periksa akhir permainan
  checkEnd()
}
</script>

<style scoped>
.game-area { padding: 12px; }
</style>
