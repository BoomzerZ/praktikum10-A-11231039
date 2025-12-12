<template>
  <!-- slide-in mobile menu, controlled with v-model:open from parent -->
  <div v-if="open" class="fixed inset-0 z-40">
    <div class="absolute inset-0 bg-black/40" @click="close" />
    <div class="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 overflow-auto transition-transform">
      <nav class="flex flex-col gap-4">
        <router-link @click.native="close" to="/" class="py-2">Home</router-link>
        <router-link @click.native="close" to="/game" class="py-2">Game</router-link>
        <router-link @click.native="close" to="/leaderboard" class="py-2">Leaderboard</router-link>
        <router-link @click.native="close" to="/gallery" class="py-2">Gallery</router-link>
        <router-link @click.native="close" to="/about" class="py-2">About</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['update:open'])

function close() { emit('update:open', false) }
</script>
