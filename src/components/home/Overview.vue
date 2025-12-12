<template>
  <section class="py-20">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <OverviewCard
        icon="/src/assets/icons/Quiz.png"
        title="Asah Pengetahuan"
        description="Jawab pertanyaan untuk menyerang musuh."
      />

      <OverviewCard
        icon="/src/assets/icons/Serang.png"
        title="Bunuh Monster"
        description="Kalahkan musuh untuk membuka monster baru."
      />

      <OverviewCard
        icon="/src/assets/icons/Koleksi.png"
        title="Kumpulkan Koleksi"
        description="Monster yang dikalahkan akan masuk ke Gallery."
      />

    </div>
  </section>
</template>

<script setup>
import OverviewCard from './OverviewCard.vue'
</script>
