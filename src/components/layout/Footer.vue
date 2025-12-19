<template>
  <footer class="border-t bg-white">
    <div class="max-w-7xl mx-auto px-6 py-12">

      <!-- GRID UTAMA -->
      <div class="grid gap-10 md:grid-cols-3 items-start">

        <!-- BRAND -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img
              src="/src/assets/LogoEdventure.png"
              alt="EdVenture"
              class="h-10 w-auto shrink-0"
            />
            <span class="text-lg font-semibold">EdVenture</span>
          </div>

          <p class="text-slate-600 text-sm leading-relaxed max-w-sm">
            Game kuis interaktif untuk menguji pengetahuan, mengalahkan monster,
            dan membangun reputasi petualangmu.
          </p>
        </div>

        <!-- EXPLORE (MENYAMPING) -->
        <div>
          <h3 class="font-semibold mb-4">Explore</h3>

          <nav class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <router-link to="/game" class="footer-link">Game</router-link>
            <router-link to="/gallery" class="footer-link">Gallery</router-link>
            <router-link to="/leaderboard" class="footer-link">Leaderboard</router-link>
            <router-link to="/about" class="footer-link">About Us</router-link>
          </nav>
        </div>

        <!-- WORLD INSPIRATION -->
        <div class="space-y-3">
          <h3 class="font-semibold">World Inspiration</h3>

          <p class="text-slate-600 text-sm leading-relaxed">
            Inspired by the upcoming game
            <span class="text-indigo-600 font-medium">
              Sol: Fractura
            </span>,
            EdVenture menggabungkan pengetahuan, strategi, dan eksplorasi dunia
            fantasi.
          </p>
        </div>

      </div>

      <!-- GARIS -->
      <div class="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span class="text-xs text-slate-500">
          © 2025 EdVenture
        </span>

        <span class="text-xs text-slate-400 italic">
          Made with curiosity
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: #475569; /* slate-600 */
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #4f46e5; /* indigo-600 */
}
</style>
