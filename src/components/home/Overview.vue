<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Cara Bermain
      </h2>

      <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
        Jawab soal, serang musuh, dan kumpulkan monster.
      </p>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <OverviewCard
          title="Jawab Kuis"
          desc="Pilih jawaban yang benar untuk menyerang musuh."
        />
        <OverviewCard
          title="Kalahkan Monster"
          desc="3 jawaban benar akan mengalahkan musuh."
        />
        <OverviewCard
          title="Koleksi & Ranking"
          desc="Monster yang dikalahkan masuk ke galeri."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import OverviewCard from './OverviewCard.vue'
</script>
