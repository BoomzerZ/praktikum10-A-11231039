<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  topPlayers: {
    type: Array,
    default: () => [],
  },
})

// untuk animasi fade dari bawah
const showPodium = ref(false)

onMounted(() => {
  // kecilin delay kalau mau lebih cepat
  setTimeout(() => {
    showPodium.value = true
  }, 80)
})
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#5E64E3] text-white"
  >

    <div class="mx-auto max-w-5xl px-6 pt-10 pb-20">
      <!-- PODIUM -->
      <!-- di dalam TampilanLeaderboard.vue, ganti isi wrapper podium-nya dengan ini -->

      <div
        :class="[
          'flex items-end justify-center gap-8 md:gap-16',
          'transition-all duration-700 ease-out',
          showPodium ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <!-- Rank 2 -->
        <div class="flex flex-col items-center">
          <div class="h-20 w-20 rounded-full bg-white/60 mb-3"></div>
          <p class="text-sm font-semibold mb-2">
            {{ topPlayers[1]?.name || 'GoodGame' }}
          </p>

          <div
            class="relative w-28 md:w-32 h-40 rounded-t-3xl overflow-hidden
                  bg-indigo-500/40"
          >
            <!-- gradient “isi” podium -->
            <div
              class="absolute inset-0 bg-gradient-to-t
                    from-transparent via-indigo-400/70 to-indigo-200"
            ></div>

            <div class="relative flex h-full items-end justify-center">
              <span class="mb-4 text-2xl font-bold text-white">2</span>
            </div>
          </div>
        </div>

        <!-- Rank 1 -->
        <div class="flex flex-col items-center">
          <div class="h-24 w-24 rounded-full bg-white/70 mb-3"></div>
          <p class="text-sm font-semibold mb-2">
            {{ topPlayers[0]?.name || 'ZaxTzy' }}
          </p>

          <div
            class="relative w-32 md:w-40 h-52 rounded-t-3xl overflow-hidden
                  bg-indigo-500/40"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t
                    from-transparent via-indigo-400/80 to-indigo-200"
            ></div>

            <div class="relative flex h-full items-end justify-center">
              <span class="mb-6 text-3xl font-extrabold text-white">1</span>
            </div>
          </div>
        </div>

        <!-- Rank 3 -->
        <div class="flex flex-col items-center">
          <div class="h-20 w-20 rounded-full bg-white/60 mb-3"></div>
          <p class="text-sm font-semibold mb-2">
            {{ topPlayers[2]?.name || 'KingX' }}
          </p>

          <div
            class="relative w-28 md:w-32 h-36 rounded-t-3xl overflow-hidden
                  bg-indigo-500/40"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t
                    from-transparent via-fuchsia-400/80 to-fuchsia-200"
            ></div>

            <div class="relative flex h-full items-end justify-center">
              <span class="mb-4 text-2xl font-bold text-white">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fade ke putih di bawah supaya nyatu sama list -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
    ></div>
  </section>
</template>
