<template>
  <button
    class="p-4 bg-white rounded-xl shadow hover:bg-indigo-50 transition"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
<script setup>
defineProps({ text: String })
</script>
