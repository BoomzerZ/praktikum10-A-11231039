<template>
  <section
    class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden"
  >
    <div class="max-w-4xl mx-auto text-center px-4 relative z-10">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
        Uji Pengetahuanmu.  
        <span class="block">Kalahkan Monsternya.</span>
      </h1>

      <p class="mt-6 text-lg md:text-xl text-white/90">
        EdVenture adalah game kuis interaktif dengan sistem battle,
        koleksi monster, dan leaderboard.
      </p>

      <router-link
        to="/game"
        class="inline-block mt-10 px-10 py-4 bg-white text-indigo-600
               font-bold rounded-full text-lg shadow-lg
               hover:scale-105 transition"
      >
        Mulai Bermain
      </router-link>
    </div>

    <!-- dekorasi -->
    <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full"></div>
  </section>
</template>
