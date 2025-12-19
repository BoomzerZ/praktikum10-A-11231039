<template>
  <div
    class="rounded-2xl border bg-gray-50 p-6
           hover:shadow-lg hover:-translate-y-1
           transition text-center"
  >
    <div
      class="mx-auto mb-4 h-12 w-12 rounded-full
             bg-indigo-100 flex items-center justify-center
             text-indigo-600 font-bold"
    >
      ★
    </div>

    <h3 class="text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm text-gray-600">
      {{ desc }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
})
</script>
