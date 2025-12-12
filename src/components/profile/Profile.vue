<script setup>
import { ref, computed } from 'vue'
import { useAuth } from '../../stores/useAuth'

import ProfileHeader from '../profile/ProfileHeader.vue'
import ProfileStat from '../profile/ProfileStat.vue'
import ProfileSetting from '../profile/ProfileSetting.vue'

const { user, isLoggedIn } = useAuth()

const initial = computed(() =>
  user.value?.username?.charAt(0)?.toUpperCase() || '?'
)

const displayName = ref(user.value?.username || '')
const bio = ref(
  user.value?.bio || 'Petualang pengetahuan di EdVenture Arena.'
)

const stats = ref({
  level: 4,
  monstersDefeated: 23,
  correctAnswers: 120,
  playTime: '2 jam 13 menit',
})

function saveProfile() {
  if (!user.value) return

  const name = displayName.value.trim()
  if (!name) return

  user.value.username = name
  user.value.bio = bio.value
  localStorage.setItem('edventure-user', JSON.stringify(user.value))
}
</script>

<template>
  <!-- kalau belum login -->
  <div v-if="!isLoggedIn" class="py-16 text-center">
    <h1 class="text-2xl font-semibold text-gray-800 mb-2">
      Kamu belum login
    </h1>
    <p class="text-gray-600">
      Silakan masuk terlebih dahulu untuk melihat dan mengatur profilmu.
    </p>
    <router-link
      to="/login"
      class="inline-block mt-6 px-6 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500"
    >
      Pergi ke Halaman Login
    </router-link>
  </div>

  <!-- konten profil -->
  <div v-else class="space-y-8">
    <ProfileHeader
      :initial="initial"
      :username="user.username"
      :bio="bio"
    />

    <ProfileStat :stats="stats" />

    <ProfileSetting
      v-model:displayName="displayName"
      v-model:bio="bio"
      @save="saveProfile"
    />
  </div>
</template>