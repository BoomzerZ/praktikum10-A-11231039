<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="overlay absolute inset-0 bg-black/50" @click="onClose"></div>

    <div class="modal bg-white rounded-lg p-6 z-10 w-80">
      <h3 class="text-xl font-bold mb-2" v-if="status === 'win'">You Win 🎉</h3>
      <h3 class="text-xl font-bold mb-2" v-else-if="status === 'lose'">You Lose 😢</h3>
      <h3 class="text-xl font-bold mb-2" v-else>Result</h3>

      <p class="mb-4">{{ message }}</p>

      <div class="flex justify-end gap-2">
        <button class="px-3 py-1 rounded border" @click="onClose">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  status: { type: String, default: '' }
})
const emit = defineEmits(['close'])

const message = props.status === 'win' ? 'Good job!' : (props.status === 'lose' ? 'Try again.' : '')

function onClose() {
  emit('close')
}
</script>

<style scoped>
.overlay { backdrop-filter: blur(2px); }
.modal { min-height: 120px; }
</style>
