<script setup>
import Navbar from '../components/layout/Navbar.vue';
import COTSHero from '../components/COTSHero.vue';
import COTSCard from '../components/COTSCard.vue';
import Footer from '../components/layout/Footer.vue';
</script>

<template>
  <Navbar/>
  <main class="pt-20 bg-slate-50 min-h-screen">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <COTSHero/>
      <COTSCard/>
    </div>
  </main>
  <Footer/>
</template>