<script setup>
import Navbar from '../components/layout/Navbar.vue';
import ListLB from '../components/leaderboard/ListLB.vue';
import TampilanLB from '../components/leaderboard/Podium.vue';
import Footer from '../components/layout/Footer.vue';
</script>

<template>
  <Navbar/>
  <main class="pt-20 bg-slate-50 min-h-screen">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <TampilanLB/>
      <ListLB/>
    </div>
  </main>
  <Footer/>
</template>