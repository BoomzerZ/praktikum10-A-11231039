<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import Profile from '@/components/profile/Profile.vue'
</script>

<template>
  <Navbar/>
  <main class="pt-24 pb-20 bg-slate-50 min-h-screen">
    <div class="max-w-6xl mx-auto px-4">
      <Profile/>
    </div>
  </main>
  <Footer/>
</template>
