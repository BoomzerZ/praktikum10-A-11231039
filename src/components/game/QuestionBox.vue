<template>
  <div class="question-box p-6 bg-white rounded-lg shadow">
    <div class="question-text mb-4 text-lg font-medium" v-html="question.text"></div>
    <div class="options flex flex-col gap-3">
      <AnswerOption
        v-for="(opt, i) in question.options"
        :key="i"
        :text="opt"
        :disabled="disabled"
        @choose="onChoose(i)"
      />
    </div>
  </div>
</template>

<script setup>
import AnswerOption from './AnswerOption.vue'
const props = defineProps({
  question: { type: Object, required: true },
  disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['answer'])

function onChoose(index) {
  emit('answer', index)
}
</script>

<style scoped>
.question-box { max-width: 720px; }
</style>
