<script setup>
const players = [
  { name: 'ZaxTzy', level: 60, kills: 1200 },
  { name: 'GoodGame', level: 43, kills: 950 },
  { name: 'KingX', level: 42, kills: 870 },
  { name: 'KangCerdas17', level: 40, kills: 830 },
  { name: 'AGOY', level: 31, kills: 510 },
  { name: 'Kipli206', level: 20, kills: 190 },
  { name: 'RageX', level: 16, kills: 175 },
  { name: 'NoobSlayer', level: 15, kills: 160 },
]
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-4xl px-4 pb-16">
      <div class="overflow-hidden rounded-3xl shadow-lg border border-slate-200 bg-white">
        <div
          v-for="(player, index) in players"
          :key="player.name + index"
          class="flex items-center gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70 transition-colors duration-150"
        >
          <div class="flex items-center justify-center">
            <div
              class="h-9 w-9 flex items-center justify-center rounded-full text-xs font-semibold shadow-sm"
              :class="[
                index === 0
                  ? 'bg-indigo-500 text-white'
                  : index === 1
                    ? 'bg-violet-500 text-white'
                    : index === 2
                      ? 'bg-pink-500 text-white'
                      : 'bg-slate-100 text-slate-700'
              ]"
            >
              {{ index + 1 }}
            </div>
          </div>

          <div class="flex items-center gap-4 flex-1">
            <div class="h-11 w-11 rounded-full bg-slate-200"></div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-slate-900">
                {{ player.name }}
              </p>
              <p class="mt-0.5 text-xs text-slate-600">
                Level: 
                <span class="font-semibold text-slate-800">
                  {{ player.level }}
                </span>
              </p>
              <p class="text-xs text-slate-600">
                Musuh yang telah dibunuh:
                <span class="font-semibold text-slate-800">
                  {{ player.kills }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
