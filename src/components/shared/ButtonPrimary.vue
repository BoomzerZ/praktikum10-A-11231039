<template>
  <button
    :class="[
      'px-5 py-3 rounded-xl font-semibold shadow transition',
      disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-500'
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script setup>
defineProps({ disabled: Boolean })
</script>
