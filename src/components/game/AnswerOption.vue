<template>
  <button
    class="p-4 bg-white rounded-xl shadow hover:bg-indigo-50 transition w-full text-center"
    @click.stop="onClick"
    :aria-disabled="disabled ? 'true' : 'false'"
    :class="{ 'opacity-60 pointer-events-none': disabled }"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['choose'])

function onClick() {
  if (props.disabled) return
  emit('choose')
}
</script>
